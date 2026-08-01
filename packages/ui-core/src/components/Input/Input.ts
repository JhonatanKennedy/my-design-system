import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { inputStyles } from "./Input.styles";
import type { TCoreInputAutocomplete, TCoreInputType } from "./Input.types";

let inputId = 0;

@customElement("core-input")
export class CoreInput extends LitElement {
  static styles = inputStyles;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  private readonly generatedId = `core-input-${++inputId}`;

  @property({ type: String })
  declare label: string | undefined;

  @property({ type: String })
  declare helperText: string | undefined;

  @property({ attribute: false })
  declare error: string | boolean | undefined;

  @property({ type: String })
  declare value: string;

  @property({ type: String })
  declare placeholder: string;

  @property({ type: String })
  declare name: string;

  @property({ type: Boolean })
  declare disabled: boolean;

  @property({ type: Boolean })
  declare readonly: boolean;

  @property({ type: Boolean })
  declare required: boolean;

  @property()
  declare autocomplete: TCoreInputAutocomplete;

  @property()
  declare type: TCoreInputType;

  @property({ type: String })
  declare id: string;

  constructor() {
    super();
    this.value = "";
    this.placeholder = "";
    this.name = "";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.autocomplete = "";
    this.type = "text";
    this.id = "";
  }
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

  /** Selects the input's text, mirroring native `HTMLInputElement.select()`. */
  select() {
    this.shadowRoot?.querySelector("input")?.select();
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
