import { LitElement, html, nothing, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { checkboxStyles } from "./Checkbox.styles";

@customElement("core-checkbox")
export class CoreCheckbox extends LitElement {
  static styles = checkboxStyles;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: String })
  label?: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  private onClick() {
    if (this.disabled) return;

    this.checked = !this.checked;

    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const checkIcon = svg`
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" class="check">
        <path d="M1 5.5L5 9.5L13 1" stroke="currentColor" stroke-width="3" stroke-linecap="square" />
      </svg>
    `;

    return html`
      <label class="wrapper ${this.disabled ? "wrapper-disabled" : ""}">
        <button
          type="button"
          role="checkbox"
          aria-checked=${this.checked}
          ?disabled=${this.disabled}
          class="box ${this.checked ? "box-checked" : ""}"
          @click=${this.onClick}
        >
          ${this.checked ? checkIcon : nothing}
        </button>
        ${this.label ? html`<span class="label">${this.label}</span>` : nothing}
      </label>
    `;
  }
}
