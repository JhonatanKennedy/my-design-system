import { describe, it, expect, beforeEach } from "vitest";
import "./Button";
import type { CoreButton } from "./Button";

describe("core-button", () => {
  let el: CoreButton;

  beforeEach(async () => {
    el = document.createElement("core-button") as CoreButton;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("Button should emit a click event", async () => {
    let clicked = false;
    el.addEventListener("click", () => (clicked = true));

    const button = el.shadowRoot?.querySelector("button") as HTMLButtonElement;
    button.click();

    expect(clicked).toBe(true);
  });

  it("Button should not emit a click event when disabled", async () => {
    el.disabled = true;
    await el.updateComplete;

    let clicked = false;
    el.addEventListener("click", () => (clicked = true));

    const button = el.shadowRoot?.querySelector("button") as HTMLButtonElement;
    button.click();

    expect(clicked).toBe(false);
  });

  it("Button should show the designated text", () => {
    el.textContent = "Salvar";
    const slot = el.shadowRoot?.querySelector("slot") as HTMLSlotElement;
    const assigned = slot.assignedNodes({ flatten: true });
    expect(assigned.some((n) => n.textContent?.includes("Salvar"))).toBe(true);
  });
});
