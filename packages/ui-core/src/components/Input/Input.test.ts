import { beforeEach, describe, expect, it } from "vitest";
import "./Input";
import type { CoreInput } from "./Input";

describe("core-input", () => {
  let el: CoreInput;

  beforeEach(async () => {
    el = document.createElement("core-input") as CoreInput;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("Input should render the designated label", async () => {
    el.label = "Username";
    await el.updateComplete;

    const label = el.shadowRoot?.querySelector("label");

    expect(label?.textContent).toBe("Username");
  });

  it("Input should render the helper text", async () => {
    el.helperText = "Helper message";
    await el.updateComplete;

    const helper = el.shadowRoot?.querySelector(".helper-text");

    expect(helper?.textContent.trim()).toBe("Helper message");
  });

  it("Input should render the error message", async () => {
    el.error = "Required field";
    await el.updateComplete;

    const helper = el.shadowRoot?.querySelector(".helper-text");

    expect(helper?.textContent.trim()).toBe("Required field");
    expect(helper?.classList.contains("error-message")).toBe(true);
  });

  it("Input should apply the error class", async () => {
    el.error = true;
    await el.updateComplete;

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    expect(input.classList.contains("input-error")).toBe(true);
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });

  it("Input should render the designated placeholder", async () => {
    el.placeholder = "Type here";
    await el.updateComplete;

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    expect(input.placeholder).toBe("Type here");
  });

  it("Input should apply the designated type", async () => {
    el.type = "email";
    await el.updateComplete;

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    expect(input.type).toBe("email");
  });

  it("Input should apply the autocomplete attribute", async () => {
    el.autocomplete = "email";
    await el.updateComplete;

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    expect(input.autocomplete).toBe("email");
  });

  it("Input should emit an input event", async () => {
    let fired = false;

    el.addEventListener("input", () => (fired = true));

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    input.value = "John";
    input.dispatchEvent(new Event("input", { bubbles: true }));

    expect(fired).toBe(true);
    expect(el.value).toBe("John");
  });

  it("Input should emit a change event", async () => {
    let fired = false;

    el.addEventListener("change", () => (fired = true));

    const input = el.shadowRoot?.querySelector("input") as HTMLInputElement;

    input.dispatchEvent(new Event("change", { bubbles: true }));

    expect(fired).toBe(true);
  });
});
