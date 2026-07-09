export type TCoreInputAutocomplete = HTMLInputElement["autocomplete"];

export type TCoreInputType = HTMLInputElement["type"];

export type TCoreInputProps = {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  autocomplete: HTMLInputElement["autocomplete"];
  type: HTMLInputElement["type"];
};
