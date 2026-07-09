export type TCoreButtonVariant =
  "primary" | "secondary" | "danger" | "success" | "purple" | "ghost";

export type TCoreButtonSize = "sm" | "md" | "lg";

export type TCoreButtonProps = {
  variant?: TCoreButtonVariant;
  size?: TCoreButtonSize;
  disabled?: boolean;
};
