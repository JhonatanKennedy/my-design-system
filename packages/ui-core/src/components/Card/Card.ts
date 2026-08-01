import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cardStyles } from "./Card.styles";

@customElement("core-card")
export class CoreCard extends LitElement {
  static styles = cardStyles;

  @property({ type: Number })
  declare rotation: number;

  @property({ type: String })
  declare accent: string | undefined;

  @property({ type: Boolean, reflect: true })
  declare selected: boolean;

  constructor() {
    super();
    this.rotation = 0;
    this.selected = false;
  }
  render() {
    return html`
      <div
        class="card ${this.selected ? "selected" : ""}"
        style=${this.rotation ? `transform: rotate(${this.rotation}deg);` : ""}
      >
        ${
          this.accent
            ? html` <div class="accent" style="background: ${this.accent};"></div> `
            : nothing
        }

        <slot></slot>
      </div>
    `;
  }
}
