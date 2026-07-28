import type React from "react";
import type { TCoreTableAlign, TCoreTableRow } from "@jhonatankennedy/ui-core";

export type TTableColumn = {
  key: string;
  label: string;
  align?: TCoreTableAlign;
  /**
   * Render custom content for this column's cells (a Badge, an icon, a
   * button, ...) instead of showing the row's raw value as text.
   */
  render?: (row: TCoreTableRow, rowIndex: number) => React.ReactNode;
};

export type TTableProps = {
  columns: TTableColumn[];
  rows: TCoreTableRow[];
  caption?: string;
};
