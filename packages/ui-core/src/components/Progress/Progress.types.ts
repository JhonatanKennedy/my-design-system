export type TCoreProgressVariant = "primary" | "secondary" | "success" | "danger" | "info";

export type TCoreProgressProps = {
  value?: number;
  variant?: TCoreProgressVariant;
  indeterminate?: boolean;
  label?: string;
};
