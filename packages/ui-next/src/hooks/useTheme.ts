"use client";

import { useCallback, useEffect, useState } from "react";

export type TTheme = "light" | "dark";

const STORAGE_KEY = "ds-theme";

function getPreferredTheme(): TTheme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: TTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

/**
 * Same hook as @jhonatankennedy/ui-react's useTheme, reimplemented here
 * rather than re-exported.
 *
 * useTheme itself has no Lit/custom-element dependency, but ui-react ships
 * as a single bundled file that also defines the Lit-wrapped components -
 * importing useTheme from it, even just for the hook, would still evaluate
 * that whole bundle. That's fine client-side, but Next.js also evaluates
 * "use client" modules on the server to produce the initial HTML, and
 * @lit/react's createComponent() needs `HTMLElement` to exist at that point
 * - it doesn't in Node, so the whole module throws before this hook would
 * ever run.
 *
 * A hook also can't be lazy-loaded the way clientOnlyComponent() lazy-loads
 * a component (next/dynamic swaps a whole component instance, which hooks
 * can't do without breaking React's rule that the same hooks run in the
 * same order every render) - so duplicating this small, dependency-free
 * hook is the straightforward fix. Keep this in sync with
 * packages/ui-react/src/hooks/useTheme.ts if that one changes.
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
