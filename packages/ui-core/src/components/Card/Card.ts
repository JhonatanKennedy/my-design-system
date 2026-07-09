import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "./Card.styles";

@customElement("core-card")
export class CoreCard extends LitElement {
  static styles = cardStyles;

  @property({ type: Number })
  rotation = 0;

  @property({ type: String })
  accent?: string;

  @property({ type: Boolean, reflect: true })
  selected = false;

  render() {
    return html`
      <div
        class="card ${this.selected ? "selected" : ""}"
        style=${this.rotation ? `transform: rotate(${this.rotation}deg);` : ""}
      >
        ${
          this.accent
            ? html` <div class="accent" style="background: ${this.accent};"></div> `
            : null
        }

        <slot></slot>
      </div>
    `;
  }
}
