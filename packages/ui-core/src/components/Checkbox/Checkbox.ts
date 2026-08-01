import { LitElement, html, nothing, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { checkboxStyles } from "./Checkbox.styles";

@customElement("core-checkbox")
export class CoreCheckbox extends LitElement {
  static styles = checkboxStyles;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  @property({ type: String })
  declare label: string | undefined;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: String })
  declare name: string;

  @property({ type: Boolean })
  declare required: boolean;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.name = "";
    this.required = false;
  }
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
          aria-required=${this.required ? "true" : "false"}
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
