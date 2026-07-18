import { describe, it, expect } from "vitest";
import {
  dsColor,
  primaryColor,
  secondaryColor,
  accentColor,
  destructiveColor,
  successColor,
  infoColor,
} from "./tokens.colors";

describe("tokens.colors", () => {
  it("exposes one constant per semantic role, as a CSS var() reference", () => {
    expect(dsColor).toEqual({
      primary: "var(--ds-primary)",
      secondary: "var(--ds-secondary)",
      accent: "var(--ds-accent)",
      destructive: "var(--ds-destructive)",
      success: "var(--ds-success)",
      info: "var(--ds-info)",
    });
  });

  it("exposes flat named exports matching dsColor", () => {
    expect(primaryColor).toBe(dsColor.primary);
    expect(secondaryColor).toBe(dsColor.secondary);
    expect(accentColor).toBe(dsColor.accent);
    expect(destructiveColor).toBe(dsColor.destructive);
    expect(successColor).toBe(dsColor.success);
    expect(infoColor).toBe(dsColor.info);
  });
});
