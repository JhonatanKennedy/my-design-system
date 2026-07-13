import { Avatar } from "@jhonatankennedy/ui-react";
import { HeroClassBadge } from "./HeroClassBadge";
import { HeroStatusBadge } from "./HeroStatusBadge";
import type { THero } from "./heroes";

type THeroTableRowProps = {
  hero: THero;
  avatarIndex: number;
};

export function HeroTableRow({ hero, avatarIndex }: THeroTableRowProps) {
  const initials = hero.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <tr className="app__hero-table-row">
      <td className="app__hero-table-td">
        <div className="app__hero-table-name-cell">
          <Avatar initials={initials} index={avatarIndex} size={32} />
          <span className="app__hero-table-name">{hero.name}</span>
        </div>
      </td>
      <td className="app__hero-table-td app__hero-table-alias">{hero.alias}</td>
      <td className="app__hero-table-td">{hero.power}</td>
      <td className="app__hero-table-td app__hero-table-td--center">
        <HeroClassBadge heroClass={hero.heroClass} />
      </td>
      <td className="app__hero-table-td app__hero-table-td--center">
        <HeroStatusBadge status={hero.status} />
      </td>
    </tr>
  );
}
