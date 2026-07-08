import type { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface ICardProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
  accent?: string;
  selected?: boolean;
}

export function Card({
  children,
  className = "",
  rotation = 0,
  accent,
  selected = false,
}: ICardProps) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""} ${className}`}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      {accent && <div className={styles.accent} style={{ background: accent }} />}
      {children}
    </div>
  );
}
