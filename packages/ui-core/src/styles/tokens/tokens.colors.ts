/**
 * JS/TS-consumable design tokens, for the cases where a color is needed
 * outside of a stylesheet or a `class` — e.g. a `color`/`style` prop on a
 * component that isn't part of this design system:
 *
 *   import { primaryColor } from "@jhonatankennedy/ui-core";
 *
 *   <ExternalButton color={primaryColor} />
 *
 * Each constant resolves to `var(--ds-*)` rather than a hard-coded hex, so
 * it keeps tracking the active theme (`:root` vs `.dark`) the same way
 * ui-core's own components do. The single source of truth for the actual
 * color values stays in src/styles/tokens/_brand.scss — nothing here
 * duplicates or can drift from that.
 *
 * Requires the token stylesheet to be loaded (`@jhonatankennedy/ui-core/styles.css`),
 * same as any other ui-core styling.
 */
export const dsColor = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  accent: "var(--ds-accent)",
  destructive: "var(--ds-destructive)",
  success: "var(--ds-success)",
  info: "var(--ds-info)",
} as const;

export type TDsColorRole = keyof typeof dsColor;

export const primaryColor = dsColor.primary;
export const secondaryColor = dsColor.secondary;
export const accentColor = dsColor.accent;
export const destructiveColor = dsColor.destructive;
export const successColor = dsColor.success;
export const infoColor = dsColor.info;
