import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { avatarStyles } from "./Avatar.styles";
import type { TCoreAvatarStatus } from "./Avatar.types";

const AV_COLOR_VARS = [
  "var(--ds-primary)",
  "var(--ds-secondary)",
  "var(--ds-success)",
  "var(--ds-destructive)",
  "var(--ds-info)",
];

const AV_FOREGROUND_VARS = [
  "var(--ds-primary-foreground)",
  "var(--ds-secondary-foreground)",
  "var(--ds-success-foreground)",
  "var(--ds-destructive-foreground)",
  "var(--ds-info-foreground)",
];

@customElement("core-avatar")
export class CoreAvatar extends LitElement {
  static styles = avatarStyles;

  @property({ type: String })
  declare initials: string;

  @property({ type: Number })
  declare index: number;

  @property({ type: Number })
  declare size: number;

  @property({ type: String })
  declare src: string | undefined;

  @property({ type: String })
  declare status: TCoreAvatarStatus | undefined;

  @state()
  declare private imageFailed: boolean;

  constructor() {
    super();
    this.initials = "";
    this.index = 0;
    this.size = 48;
    this.imageFailed = false;
  }
  protected updated(changed: Map<string, unknown>) {
    if (changed.has("src")) {
      this.imageFailed = false;
    }
  }

  private onImageError() {
    this.imageFailed = true;
  }

  render() {
    const showImage = !!this.src && !this.imageFailed;

    const bg = AV_COLOR_VARS[this.index % AV_COLOR_VARS.length];
    const fg = AV_FOREGROUND_VARS[this.index % AV_FOREGROUND_VARS.length];

    return html`
      <div class="wrapper" style="width:${this.size}px;height:${this.size}px;">
        ${
          showImage
            ? html`
                <img
                  class="avatar"
                  src=${this.src!}
                  alt=${this.initials}
                  style="width:${this.size}px;height:${this.size}px;object-fit:cover;"
                  @error=${this.onImageError}
                />
              `
            : html`
                <div
                  class="avatar"
                  style="
                  width:${this.size}px;
                  height:${this.size}px;
                  background:${bg};
                  color:${fg};
                  font-size:${this.size * 0.38}px;
                "
                >
                  ${this.initials}
                </div>
              `
        }
        ${this.status ? html`<span class="status ${this.status}"></span>` : nothing}
      </div>
    `;
  }
}
