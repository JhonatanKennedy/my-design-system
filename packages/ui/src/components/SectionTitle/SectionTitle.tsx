import styles from "./SectionTitle.module.scss";

export interface ISectionTitle {
  number: string;
  title: string;
}

export function SectionTitle({ number, title }: ISectionTitle) {
  return (
    <div className={styles.title}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.line} />
    </div>
  );
}
