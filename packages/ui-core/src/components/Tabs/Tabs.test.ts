import { describe, it, expect, vi, beforeEach } from "vitest";
import "./Tabs";
import type { CoreTabs } from "./Tabs";

describe("core-tabs", () => {
  let el: CoreTabs;

  beforeEach(async () => {
    el = document.createElement("core-tabs") as CoreTabs;
    el.labels = ["Um", "Dois", "Três"];
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders a tab button for each label", async () => {
    const buttons = el.shadowRoot?.querySelectorAll("button.tab");
    expect(buttons?.length).toBe(3);
  });

  it("marks the active tab as selected", async () => {
    const buttons = el.shadowRoot?.querySelectorAll("button.tab") as NodeListOf<HTMLButtonElement>;
    expect(buttons[0].getAttribute("aria-selected")).toBe("true");
    expect(buttons[1].getAttribute("aria-selected")).toBe("false");
  });

  it("switches the active tab and dispatches a 'tab-change' event on click", async () => {
    const handler = vi.fn();
    el.addEventListener("tab-change", handler);

    const buttons = el.shadowRoot?.querySelectorAll("button.tab") as NodeListOf<HTMLButtonElement>;
    buttons[1].click();
    await el.updateComplete;

    expect(el.active).toBe(1);
    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent;
    expect(event.detail.index).toBe(1);
  });

  it("only exposes the slot matching the active panel", async () => {
    expect(el.shadowRoot?.querySelector('slot[name="panel-0"]')).not.toBeNull();
    expect(el.shadowRoot?.querySelector('slot[name="panel-1"]')).toBeNull();

    el.active = 1;
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector('slot[name="panel-1"]')).not.toBeNull();
    expect(el.shadowRoot?.querySelector('slot[name="panel-0"]')).toBeNull();
  });
});
