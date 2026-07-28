import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { badgeStyles } from "./Badge.styles";
import type { TCoreBadgeVariant } from "./Badge.types.ts";

@customElement("core-badge")
export class CoreBadge extends LitElement {
  static styles = badgeStyles;

  @property({ type: String, reflect: true })
  declare variant: TCoreBadgeVariant;

  constructor() {
    super();
    this.variant = "success";
  }
  render() {
    return html`<span class="badge-container ${this.variant}"><slot></slot></span>`;
  }
}
