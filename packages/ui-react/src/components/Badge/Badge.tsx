import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

type BadgeVariant = "primary" | "secondary" | "danger" | "success" | "neutral" | "purple";

export interface IBadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
  success: styles.success,
  neutral: styles.neutral,
  purple: styles.purple,
};

export function Badge({ variant = "primary", children }: IBadgeProps) {
  return (
    <span className={`${styles["badge-container"]} ${VARIANT_CLASS[variant]}`}>{children}</span>
  );
}
