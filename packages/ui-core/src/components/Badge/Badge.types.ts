export type TCoreBadgeVariant = "primary" | "secondary" | "danger" | "success" | "neutral" | "info";

export type TCoreBadgeProps = {
  variant?: TCoreBadgeVariant;
};

/** @deprecated Use `TCoreBadgeProps` instead. */
export type TBadgeProps = TCoreBadgeProps;
