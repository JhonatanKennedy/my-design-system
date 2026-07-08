import { describe, it, expect, vi, afterEach } from "vitest";
import { CoreAlert } from "./Alert";
import "./Alert";

async function createAlert(attrs: Record<string, string | boolean> = {}) {
  const el = document.createElement("core-alert") as CoreAlert;

  for (const [key, value] of Object.entries(attrs)) {
    if (typeof value === "boolean") {
      if (value) el.setAttribute(key, "");
    } else {
      el.setAttribute(key, value);
    }
  }

  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

describe("CoreAlert", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders with default variant 'success'", async () => {
    const el = await createAlert();
    expect(el.variant).toBe("success");
    expect(el.getAttribute("variant")).toBe("success");
  });

  it("renders the correct icon for each variant", async () => {
    const variants = ["info", "warning", "danger", "success"] as const;

    for (const variant of variants) {
      const el = await createAlert({ variant });
      const icon = el.shadowRoot?.querySelector(".icon svg");
      expect(icon, `icon should render for variant "${variant}"`).toBeTruthy();
    }
  });

  it("does not render a title when the title prop is empty", async () => {
    const el = await createAlert();
    const title = el.shadowRoot?.querySelector(".title");
    expect(title).toBeFalsy();
  });

  it("renders the title when the title prop is provided", async () => {
    const el = await createAlert({ title: "Something went wrong" });
    const title = el.shadowRoot?.querySelector(".title");
    expect(title).toBeTruthy();
    expect(title?.textContent?.trim()).toBe("Something went wrong");
  });

  it("renders slotted content inside the message", async () => {
    const el = await createAlert();
    el.textContent = "Your changes have been saved.";
    await el.updateComplete;
    expect(el.textContent?.trim()).toBe("Your changes have been saved.");
  });

  it("does not render the dismiss button when dismissible is false", async () => {
    const el = await createAlert();
    const button = el.shadowRoot?.querySelector(".dismiss");
    expect(button).toBeFalsy();
  });

  it("renders the dismiss button when dismissible is true", async () => {
    const el = await createAlert({ dismissible: true });
    const button = el.shadowRoot?.querySelector(".dismiss");
    expect(button).toBeTruthy();
  });

  it("renders an icon inside the dismiss button", async () => {
    const el = await createAlert({ dismissible: true });
    const icon = el.shadowRoot?.querySelector(".dismiss svg");
    expect(icon).toBeTruthy();
  });

  it("dispatches a 'dismiss' event when the dismiss button is clicked", async () => {
    const el = await createAlert({ dismissible: true });

    const handler = vi.fn();
    el.addEventListener("dismiss", handler);

    const button = el.shadowRoot?.querySelector(".dismiss") as HTMLButtonElement;
    button.click();

    expect(handler).toHaveBeenCalledOnce();
  });

  it("dispatches a 'dismiss' event that bubbles and is composed", async () => {
    const el = await createAlert({ dismissible: true });

    const handler = vi.fn();
    document.addEventListener("dismiss", handler);

    const button = el.shadowRoot?.querySelector(".dismiss") as HTMLButtonElement;
    button.click();

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0][0] as CustomEvent;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);

    document.removeEventListener("dismiss", handler);
  });

  it("does not dispatch a 'dismiss' event when dismissible is false (no button to click)", async () => {
    const el = await createAlert();

    const handler = vi.fn();
    el.addEventListener("dismiss", handler);

    const button = el.shadowRoot?.querySelector(".dismiss");
    expect(button).toBeFalsy();
    expect(handler).not.toHaveBeenCalled();
  });

  it("reflects the 'dismissible' attribute", async () => {
    const el = await createAlert({ dismissible: true });
    expect(el.hasAttribute("dismissible")).toBe(true);
  });

  it("has an accessible label on the dismiss button", async () => {
    const el = await createAlert({ dismissible: true });
    const button = el.shadowRoot?.querySelector(".dismiss");
    expect(button?.getAttribute("aria-label")).toBe("Fechar");
  });
});
