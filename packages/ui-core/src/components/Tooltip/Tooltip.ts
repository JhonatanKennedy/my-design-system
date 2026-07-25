import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { tooltipStyles } from "./Tooltip.styles";

@customElement("core-tooltip")
export class CoreTooltip extends LitElement {
  static styles = tooltipStyles;

  @property({ type: String })
  declare tip: string;

  @state()
  declare private visible: boolean;

  constructor() {
    super();
    this.tip = "";
    this.visible = false;
  }
  private onMouseEnter() {
    this.visible = true;
  }

  private onMouseLeave() {
    this.visible = false;
  }

  render() {
    return html`
      <span class="wrapper" @mouseenter=${this.onMouseEnter} @mouseleave=${this.onMouseLeave}>
        <slot></slot>
        ${this.visible ? html`<span class="bubble">${this.tip}</span>` : nothing}
      </span>
    `;
  }
}
