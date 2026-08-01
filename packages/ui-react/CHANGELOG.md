# @jhonatankennedy/ui-react

## 0.4.4

### Patch Changes

- Updated dependencies
  - @jhonatankennedy/ui-core@0.6.3

## 0.4.3

### Patch Changes

- Updated dependencies [3f870b4]
  - @jhonatankennedy/ui-core@0.6.2

## 0.4.2

### Patch Changes

- de1299a: try fix ssr error by exporting static consts on a ssr file
- 4f9b132: adjust the token exports
- Updated dependencies [de1299a]
- Updated dependencies [57b575c]
- Updated dependencies [4f9b132]
  - @jhonatankennedy/ui-core@0.6.1

## 0.4.1

### Patch Changes

- Updated dependencies [ae29981]
  - @jhonatankennedy/ui-core@0.6.0

## 0.4.0

### Minor Changes

- 4076e28: `Table` now supports custom cell content, without adding sorting.

  - `ui-core`: a column can set `custom: true` on `core-table`. Its cells render as a named light-DOM slot (`cell-{rowIndex}-{key}`) instead of plain text, falling back to the row's raw value when nothing is projected into it.
  - `ui-react`: the `Table` component gained a `render(row, rowIndex)` option per column for projecting arbitrary React content (a `Badge`, an icon, a button, ...) into specific cells. The previous raw wrapper is now exposed separately as `TablePrimitive` for consumers who only need the plain data-driven table.

### Patch Changes

- Updated dependencies [4076e28]
  - @jhonatankennedy/ui-core@0.5.0

## 0.3.2

### Patch Changes

- Updated dependencies [3571479]
  - @jhonatankennedy/ui-core@0.4.0

## 0.3.1

### Patch Changes

- dba6567: add table component
- Updated dependencies [dba6567]
  - @jhonatankennedy/ui-core@0.3.1

## 0.3.0

### Minor Changes

- 1cbec58: Add a new `Table` component (`core-table` / `<Table />`). Simple, data-driven table that renders a header and body from `columns`/`rows` props, with per-column alignment, an optional caption, and an empty state. No built-in sorting/pagination — intended as the minimal building block for those to be layered on top later.

### Patch Changes

- Updated dependencies [1cbec58]
  - @jhonatankennedy/ui-core@0.3.0

## 0.2.6

### Patch Changes

- 393be9f: add types

## 0.2.5

### Patch Changes

- 2f9fd97: Css now will work

## 0.2.4

### Patch Changes

- 908e412: add "react/jsx-runtime" to externals on ui-react

## 0.2.3

### Patch Changes

- fbb9213: fix import css
- b2dac3a: try to fix imports
- Updated dependencies [fbb9213]
  - @jhonatankennedy/ui-core@0.2.1

## 0.2.2

### Patch Changes

- 16843a3: try to export components correctly

## 0.2.1

### Patch Changes

- try to fix the exports css files

## 0.2.0

### Minor Changes

- Add style entrypoint and introduce new UI components

### Patch Changes

- Updated dependencies
  - @jhonatankennedy/ui-core@0.2.0

## 0.1.0

### Minor Changes

- Initiating library

### Patch Changes

- Updated dependencies
  - @jhonatankennedy/ui-core@0.1.0
