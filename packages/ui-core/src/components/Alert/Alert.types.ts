export type TCoreAlertVariant = "info" | "warning" | "danger" | "success";

/** @deprecated Use `TCoreAlertVariant` instead (name order was inconsistent with the rest of the lib). */
export type TAlertCoreVariant = TCoreAlertVariant;

export type TCoreAlertProps = {
  variant?: TCoreAlertVariant;
  title?: string;
  open?: boolean;
  dismissible?: boolean;
};
