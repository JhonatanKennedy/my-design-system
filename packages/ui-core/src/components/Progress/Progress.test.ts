import { describe, it, expect, beforeEach } from "vitest";
import "./Progress";
import type { CoreProgress } from "./Progress";

describe("core-progress", () => {
  let el: CoreProgress;

  beforeEach(async () => {
    el = document.createElement("core-progress") as CoreProgress;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders with default value 0 and variant 'primary'", () => {
    expect(el.value).toBe(0);
    expect(el.variant).toBe("primary");
  });

  it("sets aria-valuenow based on value", async () => {
    el.value = 42;
    await el.updateComplete;

    const track = el.shadowRoot?.querySelector(".track") as HTMLElement;
    expect(track.getAttribute("aria-valuenow")).toBe("42");
  });

  it("does not set aria-valuenow when indeterminate", async () => {
    el.indeterminate = true;
    await el.updateComplete;

    const track = el.shadowRoot?.querySelector(".track") as HTMLElement;
    expect(track.hasAttribute("aria-valuenow")).toBe(false);
  });

  it("does not render the value label when indeterminate", async () => {
    el.indeterminate = true;
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".value")).toBeFalsy();
  });

  it("renders the label when provided", async () => {
    el.label = "Progresso";
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".label")?.textContent?.trim()).toBe("Progresso");
  });
});
