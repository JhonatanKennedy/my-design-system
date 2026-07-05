import styles from "./Avatar.module.scss";

const AV_COLORS = ["#FF2020", "#1E3BFF", "#00C853", "#FF6D00", "#FFE600"];

export function Avatar({
  initials,
  index = 0,
  size = 48,
}: {
  initials: string;
  index?: number;
  size?: number;
}) {
  const bg = AV_COLORS[index % AV_COLORS.length];

  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        background: bg,
        fontSize: size * 0.38,
        color: bg === "#FFE600" ? "#0A0A0A" : "#fff",
      }}
    >
      {initials}
    </div>
  );
}
