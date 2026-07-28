import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tableStyles } from "./Table.styles";
import type { TCoreTableColumn, TCoreTableRow } from "./Table.types";

/**
 * Simple, data-driven table. Pass `columns` and `rows`; the component
 * takes care of rendering the `<thead>`/`<tbody>` markup. No built-in
 * sorting, pagination or selection — this is intentionally the minimal
 * building block for those features to be layered on top later.
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
                    (row) => html`
                      <tr>
                        ${this.columns.map(
                          (column) =>
                            html`<td class="align-${column.align ?? "left"}">
                              ${row[column.key] ?? ""}
                            </td>`
                        )}
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
