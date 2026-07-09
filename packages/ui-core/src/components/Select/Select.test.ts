import { describe, it, expect, vi, beforeEach } from "vitest";
import "./Select";
import type { CoreSelect } from "./Select";

const OPTIONS = ["Pequeno", "Médio", "Grande"];

describe("core-select", () => {
  let el: CoreSelect;

  beforeEach(async () => {
    el = document.createElement("core-select") as CoreSelect;
    el.options = OPTIONS;
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders all options", () => {
    const opts = el.shadowRoot?.querySelectorAll("option");
    expect(opts?.length).toBe(OPTIONS.length);
    OPTIONS.forEach((option, i) => {
      expect(opts?.[i].textContent?.trim()).toBe(option);
    });
  });

  it("dispatches a 'change' event when a new option is selected", async () => {
    const handler = vi.fn();
    el.addEventListener("change", handler);

    const select = el.shadowRoot?.querySelector("select") as HTMLSelectElement;
    select.value = "Grande";
    select.dispatchEvent(new Event("change"));

    expect(handler).toHaveBeenCalled();
    expect(el.value).toBe("Grande");
  });

  it("accepts native disabled", async () => {
    el.disabled = true;
    await el.updateComplete;

    const select = el.shadowRoot?.querySelector("select") as HTMLSelectElement;
    expect(select.disabled).toBe(true);
  });

  it("shows the helperText when there is no error, and the error message when there is", async () => {
    el.helperText = "Escolha o tamanho ideal";
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(".helper-text")?.textContent?.trim()).toBe(
      "Escolha o tamanho ideal"
    );

    el.error = "Campo obrigatório";
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector(".helper-text")?.textContent?.trim()).toBe(
      "Campo obrigatório"
    );
  });
});
