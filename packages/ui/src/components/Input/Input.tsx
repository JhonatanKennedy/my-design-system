import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: IInputProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
}
