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

describe("core-table with a custom column", () => {
  let el: CoreTable;

  beforeEach(async () => {
    el = document.createElement("core-table") as CoreTable;
    el.columns = [
      { key: "name", label: "Name" },
      { key: "status", label: "Status", align: "center", custom: true },
    ];
    el.rows = [
      { name: "Ada Lovelace", status: "Active" },
      { name: "Grace Hopper", status: "Retired" },
    ];
    document.body.appendChild(el);
    await el.updateComplete;
  });

  it("renders a named slot for each row in the custom column", () => {
    expect(el.shadowRoot?.querySelector('slot[name="cell-0-status"]')).not.toBeNull();
    expect(el.shadowRoot?.querySelector('slot[name="cell-1-status"]')).not.toBeNull();
  });

  it("does not render a slot for a regular column", () => {
    expect(el.shadowRoot?.querySelector('td slot[name^="cell-0-name"]')).toBeNull();
  });

  it("falls back to the row's raw value when nothing is projected", () => {
    const slot = el.shadowRoot?.querySelector('slot[name="cell-0-status"]') as HTMLSlotElement;
    expect(slot.assignedNodes().length).toBe(0);
    expect(slot.textContent?.trim()).toBe("Active");
  });

  it("projects light DOM content assigned to the matching slot", async () => {
    const badge = document.createElement("span");
    badge.setAttribute("slot", "cell-0-status");
    badge.textContent = "🟢 Active";
    el.appendChild(badge);
    await el.updateComplete;

    const slot = el.shadowRoot?.querySelector('slot[name="cell-0-status"]') as HTMLSlotElement;
    const assigned = slot.assignedNodes({ flatten: true });
    expect(assigned).toContain(badge);
  });
});
