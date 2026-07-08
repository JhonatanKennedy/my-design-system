import { useCallback, useEffect, useState } from "react";

export type TTheme = "light" | "dark";

const STORAGE_KEY = "ds-theme";

function getPreferredTheme(): TTheme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: TTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/**
 * Controla o tema claro/escuro do design system.
 *
 * Alterna a classe `.dark` na raiz do documento (`<html>`), que é a que os
 * tokens em `styles/index.scss` esperam para trocar as variáveis --ds-*.
 * Persiste a escolha em localStorage e, na primeira visita, respeita a
 * preferência do sistema operacional do usuário.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<TTheme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: TTheme) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme, isDark: theme === "dark" };
}
