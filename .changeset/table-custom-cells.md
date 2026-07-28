---
"@jhonatankennedy/ui-core": minor
"@jhonatankennedy/ui-react": minor
---

`Table` now supports custom cell content, without adding sorting.

- `ui-core`: a column can set `custom: true` on `core-table`. Its cells render as a named light-DOM slot (`cell-{rowIndex}-{key}`) instead of plain text, falling back to the row's raw value when nothing is projected into it.
- `ui-react`: the `Table` component gained a `render(row, rowIndex)` option per column for projecting arbitrary React content (a `Badge`, an icon, a button, ...) into specific cells. The previous raw wrapper is now exposed separately as `TablePrimitive` for consumers who only need the plain data-driven table.
