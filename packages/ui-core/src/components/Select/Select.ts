import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { selectStyles } from "./Select.styles";

let selectId = 0;

@customElement("core-select")
export class CoreSelect extends LitElement {
  static styles = selectStyles;

  private readonly generatedId = `core-select-${++selectId}`;

  @property({ type: String })
  label?: string;

  /** Set via JS property assignment: `selectEl.options = ["A", "B"]` */
  @property({ attribute: false })
  options: string[] = [];

  @property({ type: String })
  value?: string;

  @property({ type: Boolean })
  disabled = false;

  @property({ attribute: false })
  error?: string | boolean;

  @property({ type: String })
  helperText?: string;

  @property({ type: String })
  id = "";

  private onChange(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;

    this.dispatchEvent(
      new Event("change", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const selectId = this.id || this.generatedId;
    const messageId = `${selectId}-message`;

    const hasError = Boolean(this.error);
    const errorMessage = typeof this.error === "string" ? this.error : undefined;
    const message = errorMessage || this.helperText;

    return html`
      <div class="wrapper">
        ${this.label ? html`<label class="label" for=${selectId}>${this.label}</label>` : nothing}
        <select
          id=${selectId}
          class="select ${hasError ? "select-error" : ""}"
          ?disabled=${this.disabled}
          .value=${this.value ?? ""}
          aria-invalid=${hasError ? "true" : "false"}
          aria-describedby=${message ? messageId : ""}
          @change=${this.onChange}
        >
          ${this.options.map((option) => html`<option value=${option}>${option}</option>`)}
        </select>
        ${
          message
            ? html`<span id=${messageId} class="helper-text ${errorMessage ? "error-message" : ""}"
                >${message}</span
              >`
            : nothing
        }
      </div>
    `;
  }
}
