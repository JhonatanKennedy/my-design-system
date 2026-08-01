import { useCallback, useEffect, useSyncExternalStore } from "react";

export type TTheme = "light" | "dark";

const STORAGE_KEY = "ds-theme";

function readStoredTheme(): TTheme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // localStorage can throw (private browsing, sandboxed iframes, etc).
    return null;
  }
}

function getSystemTheme(): TTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSnapshot(): TTheme {
  return readStoredTheme() ?? getSystemTheme();
}

function getServerSnapshot(): TTheme {
  return "light";
}

function applyTheme(theme: TTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/**
 * useSyncExternalStore needs a subscribe function backed by something that
 * can notify React when the external value changes. localStorage writes
 * made from the current tab don't fire a native "storage" event (only
 * *other* tabs get that), so `setTheme` notifies this tiny pub/sub
 * manually after writing.
 */
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === STORAGE_KEY) onStoreChange();
  };

  media.addEventListener("change", onStoreChange);
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener("change", onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * Controla o tema claro/escuro do design system.
 *
 * Alterna a classe `.dark` na raiz do documento (`<html>`), que é a que os
 * tokens em `styles/index.scss` esperam para trocar as variáveis --ds-*.
 * Persiste a escolha em localStorage e, na primeira visita, respeita a
 * preferência do sistema operacional do usuário.
 *
 * Usa `useSyncExternalStore` em vez de `useState` + `useEffect` porque é
 * exatamente esse o caso de uso do hook: ler um valor que vive fora do
 * React (localStorage/`matchMedia`). No server, `getServerSnapshot` sempre
 * retorna `"light"`, igual ao que o client usa na primeira renderização de
 * hidratação - o React troca pelo valor real do client automaticamente
 * depois, sem exigir um `setState` manual dentro de um efeito (o padrão que
 * o eslint-plugin-react-hooks desaconselha via `set-state-in-effect`,
 * porque provoca renders em cascata).
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: TTheme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures (private browsing, sandboxed iframes) - the
      // theme just won't persist across a reload for this session.
    }
    notify();
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme, isDark: theme === "dark" };
}
