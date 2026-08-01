"use client";
import "@jhonatankennedy/ui-react/styles.css";

// Client-only (next/dynamic + ssr: false) wrappers around every ui-react
// component - see src/components.ts and src/lazy.ts for why. Consumers can
// import these straight into a Server Component tree.
export * from "./components";

// Auxiliary prop types (TTabItem, TTableColumn, ...) needed to build props
// for the composite components above - see src/types.ts.
export * from "./types";

// Reimplemented locally rather than re-exported from ui-react - see
// src/hooks/useTheme.ts for why.
export { useTheme } from "./hooks/useTheme";
export type { TTheme } from "./hooks/useTheme";
