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
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @property({ attribute: false })
  declare labels: string[];

  @property({ type: Number, reflect: true })
  declare active: number;

  constructor() {
    super();
    this.labels = [];
    this.active = 0;
  }
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

  /**
   * WAI-ARIA Tabs pattern: only the active tab is a tab-stop (roving
   * tabindex). Arrow keys move selection between tabs; Home/End jump
   * to the first/last one. Focus always follows selection here since
   * panel content is swapped in/out rather than just hidden.
   */
  private onKeydown(event: KeyboardEvent) {
    const lastIndex = this.labels.length - 1;
    if (lastIndex < 0) return;

    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = this.active === lastIndex ? 0 : this.active + 1;
        break;
      case "ArrowLeft":
        nextIndex = this.active === 0 ? lastIndex : this.active - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.selectTab(nextIndex);

    this.updateComplete.then(() => {
      this.shadowRoot?.querySelector<HTMLButtonElement>(`#${this.tabId(nextIndex!)}`)?.focus();
    });
  }

  private tabId(index: number) {
    return `core-tabs-${this.uid}-tab-${index}`;
  }

  private panelId(index: number) {
    return `core-tabs-${this.uid}-panel-${index}`;
  }

  private readonly uid = Math.random().toString(36).slice(2, 8);

  render() {
    return html`
      <div class="list" role="tablist" @keydown=${this.onKeydown}>
        ${this.labels.map((label, i) => {
          const selected = i === this.active;
          return html`
            <button
              id=${this.tabId(i)}
              type="button"
              role="tab"
              aria-selected=${selected}
              aria-controls=${this.panelId(i)}
              tabindex=${selected ? "0" : "-1"}
              class="tab ${selected ? "tab-active" : ""}"
              @click=${() => this.selectTab(i)}
            >
              ${label}
            </button>
          `;
        })}
      </div>
      <div
        class="panel"
        role="tabpanel"
        id=${this.panelId(this.active)}
        aria-labelledby=${this.tabId(this.active)}
        tabindex="0"
      >
        <slot name="panel-${this.active}"></slot>
      </div>
    `;
  }
}
