import type { THero } from "./heroes";

export type THeroSortKey = keyof Pick<THero, "name" | "heroClass" | "status">;

type THeroTableHeaderCellProps = {
  label: string;
  sortKey?: THeroSortKey;
  activeSort?: THeroSortKey;
  ascending: boolean;
  align?: "left" | "center";
  onSort?: (key: THeroSortKey) => void;
};

export function HeroTableHeaderCell({
  label,
  sortKey,
  activeSort,
  ascending,
  align = "left",
  onSort,
}: THeroTableHeaderCellProps) {
  const isSortable = Boolean(sortKey && onSort);
  const isActive = Boolean(sortKey) && sortKey === activeSort;

  const classNames = [
    "app__hero-table-th",
    isSortable && "app__hero-table-th--sortable",
    isActive && "app__hero-table-th--active",
    align === "center" && "app__hero-table-th--center",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <th
      className={classNames}
      onClick={sortKey && onSort ? () => onSort(sortKey) : undefined}
      aria-sort={isActive ? (ascending ? "ascending" : "descending") : undefined}
    >
      {label} {isActive ? (ascending ? "↑" : "↓") : ""}
    </th>
  );
}
