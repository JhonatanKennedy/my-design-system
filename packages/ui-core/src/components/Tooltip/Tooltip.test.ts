import { describe, it, expect, beforeEach } from "vitest";
import "./Tooltip";
import type { CoreTooltip } from "./Tooltip";

describe("core-tooltip", () => {
  let el: CoreTooltip;

  beforeEach(async () => {
    el = document.createElement("core-tooltip") as CoreTooltip;
    el.tip = "Dica útil";
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("does not show the tip bubble by default", () => {
    expect(el.shadowRoot?.querySelector(".bubble")).toBeFalsy();
  });

  it("shows the tip bubble on mouseenter", async () => {
    const wrapper = el.shadowRoot?.querySelector(".wrapper") as HTMLElement;
    wrapper.dispatchEvent(new MouseEvent("mouseenter"));
    await el.updateComplete;

    const bubble = el.shadowRoot?.querySelector(".bubble");
    expect(bubble).toBeTruthy();
    expect(bubble?.textContent?.trim()).toBe("Dica útil");
  });

  it("hides the tip bubble on mouseleave", async () => {
    const wrapper = el.shadowRoot?.querySelector(".wrapper") as HTMLElement;
    wrapper.dispatchEvent(new MouseEvent("mouseenter"));
    await el.updateComplete;
    wrapper.dispatchEvent(new MouseEvent("mouseleave"));
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".bubble")).toBeFalsy();
  });
});
