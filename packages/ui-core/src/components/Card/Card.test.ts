import { describe, it, expect, beforeEach } from "vitest";
import "./Card";
import type { CoreCard } from "./Card";

describe("core-card", () => {
  let el: CoreCard;

  beforeEach(async () => {
    el = document.createElement("core-card") as CoreCard;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("Card should render the designated content", () => {
    el.textContent = "Card Content";

    const slot = el.shadowRoot?.querySelector("slot") as HTMLSlotElement;
    const assigned = slot.assignedNodes({ flatten: true });

    expect(assigned.some((node) => node.textContent?.includes("Card Content"))).toBe(true);
  });

  it("Card should render the accent element when accent is provided", async () => {
    el.accent = "#ff0000";
    await el.updateComplete;

    const accent = el.shadowRoot?.querySelector(".accent") as HTMLElement;

    expect(accent).toBeTruthy();
    expect(accent.style.background).toBe("rgb(255, 0, 0)");
  });

  it("Card should not render the accent element when accent is not provided", () => {
    const accent = el.shadowRoot?.querySelector(".accent");

    expect(accent).toBeNull();
  });

  it("Card should apply the rotation style", async () => {
    el.rotation = 10;
    await el.updateComplete;

    const card = el.shadowRoot?.querySelector(".card") as HTMLElement;

    expect(card.style.transform).toBe("rotate(10deg)");
  });

  it("Card should apply the selected class", async () => {
    el.selected = true;
    await el.updateComplete;

    const card = el.shadowRoot?.querySelector(".card") as HTMLElement;

    expect(card.classList.contains("selected")).toBe(true);
  });

  it("Card should reflect the selected attribute", async () => {
    el.selected = true;
    await el.updateComplete;

    expect(el.hasAttribute("selected")).toBe(true);
  });
});
