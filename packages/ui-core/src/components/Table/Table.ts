import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tableStyles } from "./Table.styles";
import type { TCoreTableColumn, TCoreTableRow } from "./Table.types";

/**
 * Simple, data-driven table. Pass `columns` and `rows`; the component
 * takes care of rendering the `<thead>`/`<tbody>` markup. No built-in
 * sorting, pagination or selection — this is intentionally kept as the
 * minimal building block for those features to be layered on top later.
 *
 * A column with `custom: true` renders its cells as light DOM slots
 * instead of plain text, named `cell-{rowIndex}-{key}` (e.g.
 * `cell-0-status`), matching the row's position and the column's key.
 * This lets consumers project arbitrary content - a badge, an icon, a
 * button - into specific cells. The row's own value is used as the
 * slot's fallback content when nothing is projected into it.
 */
@customElement("core-table")
export class CoreTable extends LitElement {
  static styles = tableStyles;

  @property({ attribute: false })
  declare columns: TCoreTableColumn[];

  @property({ attribute: false })
  declare rows: TCoreTableRow[];

  @property({ type: String })
  declare caption: string | undefined;

  constructor() {
    super();
    this.columns = [];
    this.rows = [];
  }

  private renderCell(row: TCoreTableRow, rowIndex: number, column: TCoreTableColumn) {
    const alignClass = `align-${column.align ?? "left"}`;
    const value = row[column.key] ?? "";

    if (!column.custom) {
      return html`<td class=${alignClass}>${value}</td>`;
    }

    const slotName = `cell-${rowIndex}-${column.key}`;
    return html`<td class=${alignClass}><slot name=${slotName}>${value}</slot></td>`;
  }

  render() {
    return html`
      <div class="table-wrap">
        <table>
          ${
            this.caption
              ? html`<caption>
                  ${this.caption}
                </caption>`
              : null
          }
          <thead>
            <tr>
              ${this.columns.map(
                (column) => html`<th class="align-${column.align ?? "left"}">${column.label}</th>`
              )}
            </tr>
          </thead>
          <tbody>
            ${
              this.rows.length
                ? this.rows.map(
                    (row, rowIndex) => html`
                      <tr>
                        ${this.columns.map((column) => this.renderCell(row, rowIndex, column))}
                      </tr>
                    `
                  )
                : html`<tr>
                    <td class="empty" colspan=${this.columns.length || 1}>No data</td>
                  </tr>`
            }
          </tbody>
        </table>
      </div>
    `;
  }
}
