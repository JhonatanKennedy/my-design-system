import { describe, it, expect } from "vitest";
import * as UiNext from "./index";

describe("@jhonatankennedy/ui-next", () => {
  it("re-exports the ui-react components", () => {
    expect(UiNext.Button).toBeDefined();
    expect(UiNext.Badge).toBeDefined();
    expect(UiNext.Alert).toBeDefined();
    expect(UiNext.Tabs).toBeDefined();
    expect(UiNext.Table).toBeDefined();
  });

  it("re-exports the useTheme hook", () => {
    expect(UiNext.useTheme).toBeTypeOf("function");
  });

  it("re-exports the design token color constants", () => {
    expect(UiNext.dsColor).toEqual({
      primary: "var(--ds-primary)",
      secondary: "var(--ds-secondary)",
      accent: "var(--ds-accent)",
      destructive: "var(--ds-destructive)",
      success: "var(--ds-success)",
      info: "var(--ds-info)",
    });
    expect(UiNext.primaryColor).toBe("var(--ds-primary)");
  });
});
