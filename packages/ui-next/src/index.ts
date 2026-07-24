"use client";

// Client-only (next/dynamic + ssr: false) wrappers around every ui-react
// component - see src/components.ts and src/lazy.ts for why. Consumers can
// import these straight into a Server Component tree.
export * from "./components";

// Reimplemented locally rather than re-exported from ui-react - see
// src/hooks/useTheme.ts for why.
export { useTheme } from "./hooks/useTheme";
export type { TTheme } from "./hooks/useTheme";

// Pulls the design system's CSS (tokens + reset) into this entry's build
// output, the same way ui-react does - see package.json's "styles.css" and
// "styles/reset.css" subpath exports, which resolve to the resulting
// dist/index.css. Plain CSS, no Lit/HTMLElement involved, safe to evaluate
// anywhere.
export * from "./styles.ts";

// Re-exported directly from ui-core (rather than relying on ui-react to
// forward them) so this package doesn't depend on ui-react's own barrel for
// them either. Plain string constants (var(--ds-*) references) - safe to
// evaluate anywhere, including the server, but re-exporting them from here
// keeps one import source for consumers already using @jhonatankennedy/ui-next.
export {
  dsColor,
  primaryColor,
  secondaryColor,
  accentColor,
  destructiveColor,
  successColor,
  infoColor,
} from "@jhonatankennedy/ui-core";
export type { TDsColorRole } from "@jhonatankennedy/ui-core";
