# @jhonatankennedy/ui-core

## 0.6.1

### Patch Changes

- de1299a: try fix ssr error by exporting static consts on a ssr file
- 57b575c: fix reset css
- 4f9b132: adjust the token exports

## 0.6.0

### Minor Changes

- ae29981: try to fix the typescript import on next

## 0.5.0

### Minor Changes

- 4076e28: `Table` now supports custom cell content, without adding sorting.

  - `ui-core`: a column can set `custom: true` on `core-table`. Its cells render as a named light-DOM slot (`cell-{rowIndex}-{key}`) instead of plain text, falling back to the row's raw value when nothing is projected into it.
  - `ui-react`: the `Table` component gained a `render(row, rowIndex)` option per column for projecting arbitrary React content (a `Badge`, an icon, a button, ...) into specific cells. The previous raw wrapper is now exposed separately as `TablePrimitive` for consumers who only need the plain data-driven table.

## 0.4.0

### Minor Changes

- 3571479: remove unecessary entries and fix the src layout

## 0.3.1

### Patch Changes

- dba6567: add table component

## 0.3.0

### Minor Changes

- 1cbec58: Add a new `Table` component (`core-table` / `<Table />`). Simple, data-driven table that renders a header and body from `columns`/`rows` props, with per-column alignment, an optional caption, and an empty state. No built-in sorting/pagination — intended as the minimal building block for those to be layered on top later.

## 0.2.1

### Patch Changes

- fbb9213: fix import css

## 0.2.0

### Minor Changes

- Add style entrypoint and introduce new UI components

## 0.1.0

### Minor Changes

- Initiating library
