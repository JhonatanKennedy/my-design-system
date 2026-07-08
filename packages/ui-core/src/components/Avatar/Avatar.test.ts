import { describe, it, expect, beforeEach } from "vitest";
import "./Avatar";
import type { CoreAvatar } from "./Avatar";

describe("core-avatar", () => {
  let el: CoreAvatar;

  beforeEach(async () => {
    el = document.createElement("core-avatar") as CoreAvatar;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("should render initials when no image source is provided", async () => {
    el.initials = "JK";
    await el.updateComplete;

    const avatar = el.shadowRoot?.querySelector(".avatar") as HTMLElement;
    const image = el.shadowRoot?.querySelector("img");

    expect(avatar).toBeTruthy();
    expect(avatar.textContent?.trim()).toBe("JK");
    expect(image).toBeNull();
  });

  it("should render an image when src is provided", async () => {
    el.initials = "JK";
    el.src = "/avatar.png";
    await el.updateComplete;

    const image = el.shadowRoot?.querySelector("img") as HTMLImageElement;

    expect(image).toBeTruthy();
    expect(image.src).toContain("/avatar.png");
    expect(image.alt).toBe("JK");
  });

  it("should fallback to initials when the image fails to load", async () => {
    el.initials = "JK";
    el.src = "/avatar.png";
    await el.updateComplete;

    const image = el.shadowRoot?.querySelector("img") as HTMLImageElement;

    image.dispatchEvent(new Event("error"));
    await el.updateComplete;

    const avatar = el.shadowRoot?.querySelector(".avatar") as HTMLElement;

    expect(el.shadowRoot?.querySelector("img")).toBeNull();
    expect(avatar.textContent?.trim()).toBe("JK");
  });

  it("should render the status indicator", async () => {
    el.status = "online";
    await el.updateComplete;

    const status = el.shadowRoot?.querySelector(".status") as HTMLElement;

    expect(status).toBeTruthy();
    expect(status.classList.contains("online")).toBe(true);
  });

  it("should apply the provided size", async () => {
    el.size = 80;
    await el.updateComplete;

    const wrapper = el.shadowRoot?.querySelector(".wrapper") as HTMLElement;

    expect(wrapper.style.width).toBe("80px");
    expect(wrapper.style.height).toBe("80px");
  });
});
