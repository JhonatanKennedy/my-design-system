import { SectionTitle } from "@jhonatankennedy/ui-next";
import { HeroTable } from "../data-table";

export function TableSection() {
  return (
    <section>
      <SectionTitle number="12" title="Tabela" />
      <HeroTable />
    </section>
  );
}
