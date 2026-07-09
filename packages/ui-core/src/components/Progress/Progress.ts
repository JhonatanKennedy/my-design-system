import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { progressStyles } from "./Progress.styles";
import type { TCoreProgressVariant } from "./Progress.types";

const VARIANT_COLOR: Record<TCoreProgressVariant, string> = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  success: "var(--ds-success)",
  danger: "var(--ds-destructive)",
  info: "var(--ds-info)",
};

@customElement("core-progress")
export class CoreProgress extends LitElement {
  static styles = progressStyles;

  @property({ type: Number })
  value = 0;

  @property({ type: String, reflect: true })
  variant: TCoreProgressVariant = "primary";

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String })
  label?: string;

  render() {
    const width = this.indeterminate ? "40%" : `${this.value}%`;
    const color = VARIANT_COLOR[this.variant];

    return html`
      <div>
        ${this.label ? html`<p class="label">${this.label}</p>` : nothing}
        <div
          class="track ${this.indeterminate ? "indeterminate" : ""}"
          role="progressbar"
          aria-valuenow=${this.indeterminate ? nothing : this.value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="fill" style="width: ${width}; background: ${color};"></div>
          ${!this.indeterminate ? html`<span class="value">${this.value}%</span>` : nothing}
        </div>
      </div>
    `;
  }
}
