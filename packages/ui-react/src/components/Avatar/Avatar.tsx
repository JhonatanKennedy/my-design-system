import { useState } from "react";
import styles from "./Avatar.module.scss";

const AV_COLOR_VARS = [
  "var(--ds-primary)",
  "var(--ds-secondary)",
  "var(--ds-success)",
  "var(--ds-destructive)",
  "var(--ds-info)",
];

const AV_FOREGROUND_VARS = [
  "var(--ds-primary-foreground)",
  "var(--ds-secondary-foreground)",
  "var(--ds-success-foreground)",
  "var(--ds-destructive-foreground)",
  "var(--ds-info-foreground)",
];

export type TAvatarStatus = "online" | "offline" | "away";

export interface IAvatarProps {
  initials: string;
  index?: number;
  size?: number;
  src?: string;
  status?: TAvatarStatus;
}

export function Avatar({ initials, index = 0, size = 48, src, status }: IAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(src) && !imageFailed;
  const bg = AV_COLOR_VARS[index % AV_COLOR_VARS.length];
  const fg = AV_FOREGROUND_VARS[index % AV_FOREGROUND_VARS.length];

  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      {showImage ? (
        <img
          src={src}
          alt={initials}
          className={styles.avatar}
          style={{ width: size, height: size, objectFit: "cover" }}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className={styles.avatar}
          style={{
            width: size,
            height: size,
            background: bg,
            color: fg,
            fontSize: size * 0.38,
          }}
        >
          {initials}
        </div>
      )}
      {status && <span className={`${styles.status} ${styles[status]}`} />}
    </div>
  );
}
