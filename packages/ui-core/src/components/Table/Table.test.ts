import { describe, it, expect, beforeEach } from "vitest";
import "./Table";
import type { CoreTable } from "./Table";

describe("core-table", () => {
  let el: CoreTable;

  beforeEach(async () => {
    el = document.createElement("core-table") as CoreTable;
    el.columns = [
      { key: "name", label: "Name" },
      { key: "role", label: "Role", align: "center" },
    ];
    el.rows = [
      { name: "Ada Lovelace", role: "Engineer" },
      { name: "Grace Hopper", role: "Admiral" },
    ];
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders a header cell for each column", () => {
    const headers = el.shadowRoot?.querySelectorAll("th");
    expect(headers?.length).toBe(2);
    expect(headers?.[0].textContent?.trim()).toBe("Name");
    expect(headers?.[1].textContent?.trim()).toBe("Role");
  });

  it("renders a row for each item in rows", () => {
    const rows = el.shadowRoot?.querySelectorAll("tbody tr");
    expect(rows?.length).toBe(2);
  });

  it("renders cell values from the matching column key", () => {
    const firstRowCells = el.shadowRoot?.querySelectorAll("tbody tr:first-child td");
    expect(firstRowCells?.[0].textContent?.trim()).toBe("Ada Lovelace");
    expect(firstRowCells?.[1].textContent?.trim()).toBe("Engineer");
  });

  it("applies the column alignment class", () => {
    const headers = el.shadowRoot?.querySelectorAll("th");
    expect(headers?.[0].classList.contains("align-left")).toBe(true);
    expect(headers?.[1].classList.contains("align-center")).toBe(true);
  });

  it("shows an empty state when there are no rows", async () => {
    el.rows = [];
    await el.updateComplete;

    const empty = el.shadowRoot?.querySelector("td.empty");
    expect(empty).toBeTruthy();
    expect(empty?.getAttribute("colspan")).toBe("2");
  });

  it("renders a caption when provided", async () => {
    el.caption = "2 registered users";
    await el.updateComplete;

    const caption = el.shadowRoot?.querySelector("caption");
    expect(caption?.textContent?.trim()).toBe("2 registered users");
  });

  it("does not render a caption when not provided", () => {
    const caption = el.shadowRoot?.querySelector("caption");
    expect(caption).toBeNull();
  });
});
