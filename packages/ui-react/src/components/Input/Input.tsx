import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: IInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;

  const hasError = Boolean(error);
  const errorMessage = typeof error === "string" ? error : undefined;
  const message = errorMessage || helperText;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${hasError ? styles.inputError : ""} ${className}`}
        aria-invalid={hasError || undefined}
        aria-describedby={message ? messageId : undefined}
        {...props}
      />
      {message && (
        <span
          id={messageId}
          className={`${styles.helperText} ${errorMessage ? styles.errorMessage : ""}`}
        >
          {message}
        </span>
      )}
    </div>
  );
}
