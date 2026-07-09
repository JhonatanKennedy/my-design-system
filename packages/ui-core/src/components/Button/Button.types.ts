export type TCoreButtonVariant =
  "primary" | "secondary" | "danger" | "success" | "purple" | "ghost";

export type TCoreButtonSize = "sm" | "md" | "lg";

export interface ICoreButtonProps {
  variant?: TCoreButtonVariant;
  size?: TCoreButtonSize;
  disabled?: boolean;
}
