import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./Button.styles";
import type { TCoreButtonVariant, TCoreButtonSize } from "./Button.types";

@customElement("core-button")
export class CoreButton extends LitElement {
  static styles = buttonStyles;

  @property({ reflect: true })
  declare variant: TCoreButtonVariant;

  @property({ reflect: true })
  declare size: TCoreButtonSize;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  constructor() {
    super();
    this.variant = "primary";
    this.size = "md";
    this.disabled = false;
  }
  render() {
    return html`<button class="button ${this.variant} ${this.size}" ?disabled="${this.disabled}">
      <slot></slot>
    </button>`;
  }
}
