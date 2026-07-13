import { describe, it, expect, vi, beforeEach } from "vitest";
import "./Checkbox";
import type { CoreCheckbox } from "./Checkbox";

describe("core-checkbox", () => {
  let el: CoreCheckbox;

  beforeEach(async () => {
    el = document.createElement("core-checkbox") as CoreCheckbox;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("reflects the checked state via aria-checked", async () => {
    const button = el.shadowRoot?.querySelector("button") as HTMLButtonElement;
    expect(button.getAttribute("aria-checked")).toBe("false");

    el.checked = true;
    await el.updateComplete;
    expect(button.getAttribute("aria-checked")).toBe("true");
  });

  it("dispatches a 'change' event when clicked", async () => {
    const handler = vi.fn();
    el.addEventListener("change", handler);

    const button = el.shadowRoot?.querySelector("button") as HTMLButtonElement;
    button.click();

    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent;
    expect(event.detail.checked).toBe(true);
  });

  it("does not dispatch a 'change' event when disabled", async () => {
    el.disabled = true;
    await el.updateComplete;

    const handler = vi.fn();
    el.addEventListener("change", handler);

    const button = el.shadowRoot?.querySelector("button") as HTMLButtonElement;
    button.click();

    expect(handler).not.toHaveBeenCalled();
    expect(button.disabled).toBe(true);
  });

  it("renders the check icon only when checked", async () => {
    expect(el.shadowRoot?.querySelector(".check")).toBeNull();

    el.checked = true;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(".check")).not.toBeNull();
  });

  it("renders the label when provided", async () => {
    el.label = "Aceito os termos";
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".label")?.textContent?.trim()).toBe("Aceito os termos");
  });
});
