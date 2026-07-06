import styles from "./Toggle.module.scss";

export interface IToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
  disabled?: boolean;
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
}: IToggleProps) {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={onChange}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
        className={`${styles.track} ${checked ? styles.trackOn : ""}`}
      >
        <span className={`${styles.thumb} ${checked ? styles.thumbOn : ""}`} />
      </button>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
