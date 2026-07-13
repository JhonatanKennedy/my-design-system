import { Badge } from "@jhonatankennedy/ui-react";
import type { THeroClass } from "./heroes";

const CLASS_VARIANT: Record<THeroClass, "primary" | "secondary" | "purple" | "neutral"> = {
  S: "primary",
  A: "secondary",
  B: "purple",
  C: "neutral",
};

export function HeroClassBadge({ heroClass }: { heroClass: THeroClass }) {
  return <Badge variant={CLASS_VARIANT[heroClass]}>{heroClass}</Badge>;
}
