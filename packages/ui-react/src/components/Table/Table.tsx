import { TablePrimitive } from "./TablePrimitive";
import type { TTableColumn, TTableProps } from "./Table.types";

/**
 * Custom cell content is projected via light DOM children using
 * `slot="cell-{rowIndex}-{key}"`, matching core-table's naming
 * convention. Columns without a `render` function are passed straight
 * through as plain data - no slot needed for those.
 */
export function Table({ columns, rows, caption }: TTableProps) {
  const primitiveColumns = columns.map(({ render, ...column }) => ({
    ...column,
    custom: Boolean(render),
  }));

  const customColumns = columns.filter(
    (column): column is TTableColumn & { render: NonNullable<TTableColumn["render"]> } =>
      Boolean(column.render)
  );

  return (
    <TablePrimitive columns={primitiveColumns} rows={rows} caption={caption}>
      {rows.flatMap((row, rowIndex) =>
        customColumns.map((column) => (
          <div key={`${rowIndex}-${column.key}`} slot={`cell-${rowIndex}-${column.key}`}>
            {column.render(row, rowIndex)}
          </div>
        ))
      )}
    </TablePrimitive>
  );
}
