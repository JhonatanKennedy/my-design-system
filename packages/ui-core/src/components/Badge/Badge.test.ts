import { describe, it, expect, beforeEach } from "vitest";
import "./Badge";
import type { CoreBadge } from "./Badge";

describe("core-badge", () => {
  let el: CoreBadge;

  beforeEach(async () => {
    el = document.createElement("core-badge") as CoreBadge;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("Badge should render the designated text", () => {
    el.textContent = "New";

    const slot = el.shadowRoot?.querySelector("slot") as HTMLSlotElement;
    const assigned = slot.assignedNodes({ flatten: true });

    expect(assigned.some((n) => n.textContent?.includes("New"))).toBe(true);
  });

  it("Badge should have the default variant", () => {
    const badge = el.shadowRoot?.querySelector(".badge-container") as HTMLElement;

    expect(badge.classList.contains("success")).toBe(true);
  });

  it.each(["primary", "secondary", "danger", "success", "neutral", "info"] as const)(
    "Badge should apply the '%s' variant",
    async (variant) => {
      el.variant = variant;
      await el.updateComplete;

      const badge = el.shadowRoot?.querySelector(".badge-container") as HTMLElement;

      expect(badge.classList.contains(variant)).toBe(true);
    }
  );

  it("Badge should reflect the variant attribute", async () => {
    el.variant = "primary";
    await el.updateComplete;

    expect(el.getAttribute("variant")).toBe("primary");
  });
});
