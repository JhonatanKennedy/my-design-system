import styles from "./Select.module.scss";

export interface ISelectProps {
  label?: string;
  options: string[];
}

export function Select({ label, options }: ISelectProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
