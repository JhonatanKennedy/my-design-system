import styles from "./Progress.module.scss";

export interface IProgressProps {
  value: number;
  color?: string;
  label?: string;
}

export function Progress({
  value = 0,
  color = "var(--ds-primary)",
  label,
}: IProgressProps) {
  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${value}%`, background: color }}
        />
        <span className={styles.value}>{value}%</span>
      </div>
    </div>
  );
}
