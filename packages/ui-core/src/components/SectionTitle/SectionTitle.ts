import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sectionTitleStyles } from "./SectionTitle.styles";

@customElement("core-section-title")
export class CoreSectionTitle extends LitElement {
  static styles = sectionTitleStyles;

  @property({ type: String })
  declare number: string;

  @property({ type: String })
  declare title: string;

  constructor() {
    super();
    this.number = "";
    this.title = "";
  }
  render() {
    return html`
      <div class="title">
        <span class="number">${this.number}</span>
        <h2 class="heading">${this.title}</h2>
        <div class="line"></div>
      </div>
    `;
  }
}
