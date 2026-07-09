import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { speechBubbleStyles } from "./SpeechBubble.styles";
import type { TCoreSpeechBubbleDirection } from "./SpeechBubble.types";

@customElement("core-speech-bubble")
export class CoreSpeechBubble extends LitElement {
  static styles = speechBubbleStyles;

  @property({ type: String, reflect: true })
  direction: TCoreSpeechBubbleDirection = "left";

  @property({ type: String })
  bg = "#ffffff";

  render() {
    const isLeft = this.direction === "left";

    return html`
      <div class="bubble" style="--bubble-bg: ${this.bg};">
        <slot></slot>
        <span class="tail-outer ${isLeft ? "tail-outer-left" : "tail-outer-right"}"></span>
        <span class="tail-inner ${isLeft ? "tail-inner-left" : "tail-inner-right"}"></span>
      </div>
    `;
  }
}
