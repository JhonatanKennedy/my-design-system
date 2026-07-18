export type TCoreButtonVariant = "primary" | "secondary" | "danger" | "success" | "info" | "ghost";

export type TCoreButtonSize = "sm" | "md" | "lg";

export type TCoreButtonProps = {
  variant?: TCoreButtonVariant;
  size?: TCoreButtonSize;
  disabled?: boolean;
};
