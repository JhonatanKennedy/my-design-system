import styles from "./Toggle.module.scss";

export interface IToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export function Toggle({ checked, onChange, label }: IToggleProps) {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={onChange}
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
