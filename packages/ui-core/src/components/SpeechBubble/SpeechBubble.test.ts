import { describe, it, expect, beforeEach } from "vitest";
import "./SpeechBubble";
import type { CoreSpeechBubble } from "./SpeechBubble";

describe("core-speech-bubble", () => {
  let el: CoreSpeechBubble;

  beforeEach(async () => {
    el = document.createElement("core-speech-bubble") as CoreSpeechBubble;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("defaults to direction 'left'", () => {
    expect(el.direction).toBe("left");
    expect(el.shadowRoot?.querySelector(".tail-outer-left")).toBeTruthy();
  });

  it("renders the right tail when direction is 'right'", async () => {
    el.direction = "right";
    await el.updateComplete;

    expect(el.shadowRoot?.querySelector(".tail-outer-right")).toBeTruthy();
    expect(el.shadowRoot?.querySelector(".tail-outer-left")).toBeFalsy();
  });

  it("renders slotted content", async () => {
    el.textContent = "Olá!";

    const slot = el.shadowRoot?.querySelector("slot") as HTMLSlotElement;
    const assigned = slot.assignedNodes({ flatten: true });

    expect(assigned.some((n) => n.textContent?.includes("Olá!"))).toBe(true);
  });

  it("reflects the direction attribute", async () => {
    el.direction = "right";
    await el.updateComplete;

    expect(el.getAttribute("direction")).toBe("right");
  });
});
