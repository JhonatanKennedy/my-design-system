export type TCoreAvatarStatus = "online" | "offline" | "away";

export type TCoreAvatarProps = {
  initials: string;
  index: number;
  size: number;
  src?: string;
  status?: TCoreAvatarStatus;
};
