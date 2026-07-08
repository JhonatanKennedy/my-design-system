import { LitElement, html, nothing } from "lit";
import { Info, AlertTriangle, X, Check } from "lucide-static";
import { customElement, property } from "lit/decorators.js";
import { alertStyles } from "./Alert.styles.ts";
import type { TAlertCoreVariant } from "./Alert.types";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

const ALERT_ICON: Record<TAlertCoreVariant, string> = {
  info: Info,
  warning: AlertTriangle,
  danger: X,
  success: Check,
};

@customElement("core-alert")
export class CoreAlert extends LitElement {
  static styles = alertStyles;

  @property({ type: String })
  title = "";

  @property({ type: String, reflect: true })
  variant: TAlertCoreVariant = "success";

  @property({ type: Boolean, reflect: true })
  open = true;

  @property({ type: Boolean, reflect: true })
  dismissible = false;

  private _handleDismiss() {
    this.dispatchEvent(
      new CustomEvent("dismiss", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (!this.open) return nothing;

    return html`
      <div class="alert ${this.variant}">
        <span class="icon">${unsafeSVG(ALERT_ICON[this.variant])}</span>
        <div class="content">
          ${this.title ? html`<p class="title">${this.title}</p>` : nothing}
          <p class="message"><slot></slot></p>
        </div>
        ${
          this.dismissible
            ? html`
                <button
                  type="button"
                  class="dismiss"
                  @click="${this._handleDismiss}"
                  aria-label="Fechar"
                >
                  ${unsafeSVG(X)}
                </button>
              `
            : nothing
        }
      </div>
    `;
  }
}
