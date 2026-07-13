export type THeroClass = "S" | "A" | "B" | "C";
export type THeroStatus = "Active" | "Retired" | "MIA";

export type THero = {
  name: string;
  alias: string;
  power: string;
  heroClass: THeroClass;
  status: THeroStatus;
};

export const HEROES: THero[] = [
  {
    name: "Spider-Man",
    alias: "Peter Parker",
    power: "Web-slinging / Spider-Sense",
    heroClass: "S",
    status: "Active",
  },
  {
    name: "Storm",
    alias: "Ororo Munroe",
    power: "Weather control",
    heroClass: "S",
    status: "Active",
  },
  {
    name: "Wolverine",
    alias: "Logan",
    power: "Adamantium claws / Healing",
    heroClass: "A",
    status: "Active",
  },
  {
    name: "Iron Man",
    alias: "Tony Stark",
    power: "Powered armor / Genius IQ",
    heroClass: "S",
    status: "Retired",
  },
  {
    name: "Black Widow",
    alias: "Natasha Romanoff",
    power: "Espionage / Martial arts",
    heroClass: "B",
    status: "Active",
  },
  {
    name: "Captain America",
    alias: "Steve Rogers",
    power: "Super soldier serum",
    heroClass: "A",
    status: "MIA",
  },
];

/** Which Avatar palette slot (0-4) each hero uses, kept stable across sorts. */
export const HERO_AVATAR_INDEX: Record<string, number> = HEROES.reduce(
  (acc, hero, i) => ({ ...acc, [hero.name]: i }),
  {}
);
