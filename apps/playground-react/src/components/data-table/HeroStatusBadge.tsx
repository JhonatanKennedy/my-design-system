import { Badge } from "@jhonatankennedy/ui-react";
import type { THeroStatus } from "./heroes";

const STATUS_VARIANT: Record<THeroStatus, "success" | "neutral" | "danger"> = {
  Active: "success",
  Retired: "neutral",
  MIA: "danger",
};

export function HeroStatusBadge({ status }: { status: THeroStatus }) {
  return <Badge variant={STATUS_VARIANT[status]}>{status}</Badge>;
}
