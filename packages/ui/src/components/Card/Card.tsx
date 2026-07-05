import type { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface ICardProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
  accent?: string;
}

export function Card({
  children,
  className = "",
  rotation = 0,
  accent,
}: ICardProps) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      {accent && (
        <div className={styles.accent} style={{ background: accent }} />
      )}
      {children}
    </div>
  );
}
