import { useMemo, useState } from "react";
import { HERO_AVATAR_INDEX, HEROES } from "./heroes";
import { HeroTableHeaderCell, type THeroSortKey } from "./HeroTableHeaderCell";
import { HeroTableRow } from "./HeroTableRow";

export function HeroTable() {
  const [sortKey, setSortKey] = useState<THeroSortKey>("name");
  const [ascending, setAscending] = useState(true);

  const sortedHeroes = useMemo(() => {
    return [...HEROES].sort((a, b) => {
      const result = a[sortKey].localeCompare(b[sortKey]);
      return ascending ? result : -result;
    });
  }, [sortKey, ascending]);

  const handleSort = (key: THeroSortKey) => {
    if (key === sortKey) {
      setAscending(!ascending);
    } else {
      setSortKey(key);
      setAscending(true);
    }
  };

  return (
    <div className="app__hero-table-wrap">
      <div className="app__hero-table-scroll">
        <table className="app__hero-table">
          <thead>
            <tr>
              <HeroTableHeaderCell
                label="Hero"
                sortKey="name"
                activeSort={sortKey}
                ascending={ascending}
                onSort={handleSort}
              />
              <HeroTableHeaderCell label="Alter Ego" ascending={ascending} />
              <HeroTableHeaderCell label="Power" ascending={ascending} />
              <HeroTableHeaderCell
                label="Class"
                sortKey="heroClass"
                activeSort={sortKey}
                ascending={ascending}
                align="center"
                onSort={handleSort}
              />
              <HeroTableHeaderCell
                label="Status"
                sortKey="status"
                activeSort={sortKey}
                ascending={ascending}
                align="center"
                onSort={handleSort}
              />
            </tr>
          </thead>
          <tbody>
            {sortedHeroes.map((hero) => (
              <HeroTableRow
                key={hero.name}
                hero={hero}
                avatarIndex={HERO_AVATAR_INDEX[hero.name]}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="app__hero-table-footer">
        {HEROES.length} registered heroes · Click column headers to sort
      </div>
    </div>
  );
}
