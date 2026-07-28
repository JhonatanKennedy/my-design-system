"use client";

import { Badge, SectionTitle, Table } from "@jhonatankennedy/ui-next";
import { HEROES, type THero, type THeroClass, type THeroStatus } from "../data-table";

const CLASS_VARIANT: Record<THeroClass, "primary" | "secondary" | "info" | "neutral"> = {
  S: "primary",
  A: "secondary",
  B: "info",
  C: "neutral",
};

const STATUS_VARIANT: Record<THeroStatus, "success" | "neutral" | "danger"> = {
  Active: "success",
  Retired: "neutral",
  MIA: "danger",
};

const COLUMNS = [
  { key: "name", label: "Hero" },
  { key: "alias", label: "Alter Ego" },
  { key: "power", label: "Power" },
  {
    key: "heroClass",
    label: "Class",
    align: "center" as const,
    render: (row: Record<string, string | number>) => {
      const heroClass = row.heroClass as THeroClass;
      return <Badge variant={CLASS_VARIANT[heroClass]}>{heroClass}</Badge>;
    },
  },
  {
    key: "status",
    label: "Status",
    align: "center" as const,
    render: (row: Record<string, string | number>) => {
      const status = row.status as THeroStatus;
      return <Badge variant={STATUS_VARIANT[status]}>{status}</Badge>;
    },
  },
];

export function TableSection() {
  return (
    <section>
      <SectionTitle number="12" title="Tabela" />
      <Table
        columns={COLUMNS}
        rows={HEROES satisfies THero[]}
        caption={`${HEROES.length} registered heroes`}
      />
    </section>
  );
}
