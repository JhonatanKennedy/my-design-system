import { describe, it, expect, vi, beforeEach } from "vitest";
import "./Toggle";
import type { CoreToggle } from "./Toggle";

describe("core-toggle", () => {
  let el: CoreToggle;

  beforeEach(async () => {
    el = document.createElement("core-toggle") as CoreToggle;
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

  it("renders the label when provided", async () => {
    el.label = "Notificações";
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".label")?.textContent?.trim()).toBe("Notificações");
  });
});
