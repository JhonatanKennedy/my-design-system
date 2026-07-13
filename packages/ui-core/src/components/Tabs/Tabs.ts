import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tabsStyles } from "./Tabs.styles";

/**
 * Tab panel content is projected via light DOM children using
 * `slot="panel-{index}"`, matching the tab's position in `labels`.
 * Only the active panel's slot exists in the render tree, so the
 * other panels stay unrendered (not just visually hidden).
 */
@customElement("core-tabs")
export class CoreTabs extends LitElement {
  static styles = tabsStyles;

  @property({ attribute: false })
  labels: string[] = [];

  @property({ type: Number, reflect: true })
  active = 0;

  private selectTab(index: number) {
    if (index === this.active) return;

    this.active = index;

    this.dispatchEvent(
      new CustomEvent("tab-change", {
        detail: { index },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="list" role="tablist">
        ${this.labels.map(
          (label, i) => html`
            <button
              type="button"
              role="tab"
              aria-selected=${i === this.active}
              class="tab ${i === this.active ? "tab-active" : ""}"
              @click=${() => this.selectTab(i)}
            >
              ${label}
            </button>
          `
        )}
      </div>
      <div class="panel" role="tabpanel">
        <slot name="panel-${this.active}"></slot>
      </div>
    `;
  }
}
