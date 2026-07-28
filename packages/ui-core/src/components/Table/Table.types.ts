export type TCoreTableAlign = "left" | "center" | "right";

export type TCoreTableColumn = {
  key: string;
  label: string;
  align?: TCoreTableAlign;
  /**
   * When true, this column's cells are projected via a named slot
   * (`cell-{rowIndex}-{key}`) instead of rendering the row's raw value
   * directly. This is how consumers plug in custom cell content (badges,
   * icons, buttons, ...) without the table needing to know about it.
   * The row's own value is kept as the slot's fallback content, so a row
   * without matching projected content still shows something sensible.
   */
  custom?: boolean;
};

export type TCoreTableRow = Record<string, string | number>;

export type TCoreTableProps = {
  columns: TCoreTableColumn[];
  rows: TCoreTableRow[];
  caption?: string;
};
