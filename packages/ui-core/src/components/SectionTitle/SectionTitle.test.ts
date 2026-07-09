import { describe, it, expect, beforeEach } from "vitest";
import "./SectionTitle";
import type { CoreSectionTitle } from "./SectionTitle";

describe("core-section-title", () => {
  let el: CoreSectionTitle;

  beforeEach(async () => {
    el = document.createElement("core-section-title") as CoreSectionTitle;
    el.number = "01";
    el.title = "Componentes";
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders the number and the title", () => {
    expect(el.shadowRoot?.querySelector(".number")?.textContent?.trim()).toBe("01");
    expect(el.shadowRoot?.querySelector(".heading")?.textContent?.trim()).toBe("Componentes");
  });

  it("renders the divider line", () => {
    expect(el.shadowRoot?.querySelector(".line")).toBeTruthy();
  });
});
