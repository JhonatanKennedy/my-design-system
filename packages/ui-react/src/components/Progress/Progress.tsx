import styles from "./Progress.module.scss";

export type TProgressVariant = "primary" | "secondary" | "success" | "danger" | "info";

export interface IProgressProps {
  value?: number;
  variant?: TProgressVariant;
  indeterminate?: boolean;
  label?: string;
}

const VARIANT_COLOR: Record<TProgressVariant, string> = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  success: "var(--ds-success)",
  danger: "var(--ds-destructive)",
  info: "var(--ds-info)",
};

export function Progress({
  value = 0,
  variant = "primary",
  indeterminate = false,
  label,
}: IProgressProps) {
  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      <div
        className={`${styles.track} ${indeterminate ? styles.indeterminate : ""}`}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={styles.fill}
          style={{
            width: indeterminate ? "40%" : `${value}%`,
            background: VARIANT_COLOR[variant],
          }}
        />
        {!indeterminate && <span className={styles.value}>{value}%</span>}
      </div>
    </div>
  );
}
