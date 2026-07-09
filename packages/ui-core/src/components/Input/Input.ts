import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { inputStyles } from "./Input.styles";
import type { TCoreInputAutocomplete, TCoreInputType } from "./Input.types";

let inputId = 0;

@customElement("core-input")
export class CoreInput extends LitElement {
  static styles = inputStyles;

  private readonly generatedId = `core-input-${++inputId}`;

  @property({ type: String })
  label?: string;

  @property({ type: String })
  helperText?: string;

  @property({ attribute: false })
  error?: string | boolean;

  @property({ type: String })
  value = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  name = "";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean })
  required = false;

  @property()
  autocomplete: TCoreInputAutocomplete = "";

  @property()
  type: TCoreInputType = "text";

  @property({ type: String })
  id = "";

  private onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private onChange() {
    this.dispatchEvent(
      new Event("change", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const inputId = this.id || this.generatedId;
    const messageId = `${inputId}-message`;

    const hasError = Boolean(this.error);
    const errorMessage = typeof this.error === "string" ? this.error : undefined;

    const message = errorMessage || this.helperText;

    return html`
      <div class="wrapper">
        ${this.label ? html`<label class="label" for=${inputId}>${this.label}</label>` : null}

        <input
          id=${inputId}
          class="input ${hasError ? "input-error" : ""}"
          .value=${live(this.value)}
          .type=${this.type}
          name=${this.name}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .autocomplete=${this.autocomplete}
          aria-invalid=${hasError ? "true" : "false"}
          aria-describedby=${message ? messageId : ""}
          @input=${this.onInput}
          @change=${this.onChange}
        />

        ${
          message
            ? html`
                <span id=${messageId} class="helper-text ${errorMessage ? "error-message" : ""}">
                  ${message}
                </span>
              `
            : nothing
        }
      </div>
    `;
  }
}
