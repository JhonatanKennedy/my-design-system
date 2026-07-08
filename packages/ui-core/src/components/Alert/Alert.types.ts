export type TAlertCoreVariant = "info" | "warning" | "danger" | "success";

export type TCoreAlertProps = {
  variant?: TAlertCoreVariant;
  title?: string;
  open?: boolean;
  dismissible?: boolean;
};
