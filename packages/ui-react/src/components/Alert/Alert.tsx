import type { ReactNode } from "react";
import { Check, X, AlertTriangle, Info } from "lucide-react";
import styles from "./Alert.module.scss";

export type TAlertVariant = "info" | "warning" | "danger" | "success";

export interface IAlertProps {
  variant?: TAlertVariant;
  title?: string;
  children: ReactNode;
  open: boolean;
  onDismiss?: () => void;
}

const ALERT_ICON: Record<TAlertVariant, ReactNode> = {
  info: <Info size={18} />,
  warning: <AlertTriangle size={18} />,
  danger: <X size={18} />,
  success: <Check size={18} />,
};

const VARIANT_CLASS: Record<TAlertVariant, string> = {
  info: styles.info,
  danger: styles.danger,
  success: styles.success,
  warning: styles.warning,
};

export function Alert({ variant = "info", title, open, children, onDismiss }: IAlertProps) {
  if (!open) return;

  return (
    <div className={`${styles.alert} ${VARIANT_CLASS[variant]}`}>
      <span className={styles.icon}>{ALERT_ICON[variant]}</span>
      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        <p className={styles.message}>{children}</p>
      </div>
      {onDismiss && (
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Fechar">
          <X size={16} />
        </button>
      )}
    </div>
  );
}
