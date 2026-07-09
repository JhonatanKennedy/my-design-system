import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { toggleStyles } from "./Toggle.styles";

@customElement("core-toggle")
export class CoreToggle extends LitElement {
  static styles = toggleStyles;

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
    return html`
      <div class="wrapper">
        <button
          type="button"
          role="switch"
          aria-checked=${this.checked}
          ?disabled=${this.disabled}
          class="track ${this.checked ? "track-on" : ""}"
          @click=${this.onClick}
        >
          <span class="thumb ${this.checked ? "thumb-on" : ""}"></span>
        </button>
        ${this.label ? html`<span class="label">${this.label}</span>` : nothing}
      </div>
    `;
  }
}
