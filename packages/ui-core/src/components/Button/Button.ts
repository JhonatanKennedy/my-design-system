import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./Button.styles.ts";
import type { TCoreButtonVariant, TCoreButtonSize } from "./Button.types";

@customElement("core-button")
export class CoreButton extends LitElement {
  static styles = buttonStyles;

  @property({ reflect: true })
  variant: TCoreButtonVariant = "primary";

  @property({ reflect: true })
  size: TCoreButtonSize = "md";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return html`<button class="button ${this.variant} ${this.size}" ?disabled="${this.disabled}">
      <slot></slot>
    </button>`;
  }
}
