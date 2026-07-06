import { useId } from "react";
import type { SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  error?: string | boolean;
  helperText?: string;
}

export function Select({
  label,
  options,
  error,
  helperText,
  className = "",
  id,
  ...props
}: ISelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const messageId = `${selectId}-message`;

  const hasError = Boolean(error);
  const errorMessage = typeof error === "string" ? error : undefined;
  const message = errorMessage || helperText;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`${styles.select} ${hasError ? styles.selectError : ""} ${className}`}
        aria-invalid={hasError || undefined}
        aria-describedby={message ? messageId : undefined}
        {...props}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
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
