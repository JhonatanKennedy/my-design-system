export type TCoreCardProps = {
  rotation?: number;
  accent?: string;
  selected?: boolean;
};

/** @deprecated Use `TCoreCardProps` instead. Also dropped `class`, which was never a real `CoreCard` property. */
export type TCardProps = TCoreCardProps;
