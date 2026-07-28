"use client";
import "@jhonatankennedy/ui-react/styles.css";

// Client-only (next/dynamic + ssr: false) wrappers around every ui-react
// component - see src/components.ts and src/lazy.ts for why. Consumers can
// import these straight into a Server Component tree.
export * from "./components";

// Reimplemented locally rather than re-exported from ui-react - see
// src/hooks/useTheme.ts for why.
export { useTheme } from "./hooks/useTheme";
export type { TTheme } from "./hooks/useTheme";
export {
  dsColor,
  primaryColor,
  secondaryColor,
  accentColor,
  destructiveColor,
  successColor,
  infoColor,
} from "@jhonatankennedy/ui-react";
export type { TDsColorRole } from "@jhonatankennedy/ui-react";
