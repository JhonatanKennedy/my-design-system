// Re-exports of the "building block" types from ui-react that consumers
// need to construct props for composite components (Table, Tabs, ...),
// but that weren't part of this package's public surface before - only the
// top-level TTableProps/TTabsProps were reachable through ComponentProps<>,
// never the nested item/column types (TTabItem, TTableColumn) that those
// props are made of. Without these, a consumer building a `tabs` array or
// `columns` array outside of an inline literal had no type to annotate it
// with, and had to depend on @jhonatankennedy/ui-react directly just to get
// them - defeating the point of this package as the Next.js-facing surface.
export type { TTableColumn, TTableProps, TTabItem, TTabsProps } from "@jhonatankennedy/ui-react";
