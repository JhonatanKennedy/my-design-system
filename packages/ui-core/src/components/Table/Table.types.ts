export type TCoreTableAlign = "left" | "center" | "right";

export type TCoreTableColumn = {
  key: string;
  label: string;
  align?: TCoreTableAlign;
};

export type TCoreTableRow = Record<string, string | number>;

export type TCoreTableProps = {
  columns: TCoreTableColumn[];
  rows: TCoreTableRow[];
  caption?: string;
};
