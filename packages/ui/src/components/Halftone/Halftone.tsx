import styles from "./Halftone.module.scss";

export interface IHalftone {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export function Halftone({
  className = "",
  color = "var(--ds-border)",
  size = 12,
  opacity = 0.18,
}: IHalftone) {
  return (
    <div
      className={`${styles.halftone} ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
