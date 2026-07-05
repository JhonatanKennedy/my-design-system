import type { ReactNode } from "react";
import styles from "./SpeechBubble.module.scss";

export interface ISpeechBubbleProps {
  children: ReactNode;
  direction?: "left" | "right";
  bg?: string;
  className?: string;
}

export function SpeechBubble({
  children,
  direction = "left",
  bg = "#ffffff",
  className = "",
}: ISpeechBubbleProps) {
  const isLeft = direction === "left";

  return (
    <div
      className={`${styles.bubble} ${className}`}
      style={{ backgroundColor: bg }}
    >
      {children}
      {/* Rabicho */}
      <span
        className={`${styles.tailOuter} ${
          isLeft ? styles.tailOuterLeft : styles.tailOuterRight
        }`}
      />
      <span
        className={`${styles.tailInner} ${
          isLeft ? styles.tailInnerLeft : styles.tailInnerRight
        }`}
      />
    </div>
  );
}
