import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { tooltipStyles } from "./Tooltip.styles";

let tooltipId = 0;

@customElement("core-tooltip")
export class CoreTooltip extends LitElement {
  static styles = tooltipStyles;

  private readonly bubbleId = `core-tooltip-${++tooltipId}`;

  @property({ type: String })
  declare tip: string;

  @state()
  declare private visible: boolean;

  constructor() {
    super();
    this.tip = "";
    this.visible = false;
  }
  private show() {
    this.visible = true;
  }

  private hide() {
    this.visible = false;
  }

  private onKeydown(event: KeyboardEvent) {
    // WCAG 1.4.13: hoverable/focusable content must stay dismissible
    // without moving the pointer or focus.
    if (event.key === "Escape" && this.visible) {
      this.hide();
    }
  }

  /**
   * The trigger is arbitrary projected (light DOM) content, so it can't be
   * targeted from the template - Lit only binds attributes on elements it
   * renders itself. On every slot change we imperatively point each
   * assigned element at the tooltip bubble via `aria-describedby`, so
   * screen readers announce the tip when the trigger receives focus.
   */
  private onSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    for (const element of slot.assignedElements()) {
      element.setAttribute("aria-describedby", this.bubbleId);
    }
  }

  render() {
    return html`
      <span
        class="wrapper"
        @mouseenter=${this.show}
        @mouseleave=${this.hide}
        @focusin=${this.show}
        @focusout=${this.hide}
        @keydown=${this.onKeydown}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
        ${
          this.visible
            ? html`<span id=${this.bubbleId} role="tooltip" class="bubble">${this.tip}</span>`
            : nothing
        }
      </span>
    `;
  }
}
