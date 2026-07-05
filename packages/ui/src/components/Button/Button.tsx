import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

export type TButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "ghost"
  | "purple";

export type TButtonSize = "sm" | "md" | "lg";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  size?: TButtonSize;
  children: ReactNode;
}

const VARIANT_CLASS: Record<TButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
  success: styles.success,
  ghost: styles.ghost,
  purple: styles.purple,
};

const SIZE_CLASS: Record<TButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: IButtonProps) {
  return (
    <button
      className={`${styles.button} ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
