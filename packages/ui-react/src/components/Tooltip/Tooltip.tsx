import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./Tooltip.module.scss";

export function Tooltip({ children, tip }: { children: ReactNode; tip: string }) {
  const [vis, setVis] = useState(false);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVis(true)}
      onMouseLeave={() => setVis(false)}
    >
      {children}
      {vis && <span className={styles.bubble}>{tip}</span>}
    </span>
  );
}
