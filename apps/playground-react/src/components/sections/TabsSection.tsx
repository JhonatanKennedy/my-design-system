import { Card, SectionTitle, Tabs } from "@jhonatankennedy/ui-react";

const TABS = [
  {
    label: "Biografia",
    content: (
      <p className="app__panel-footer-text">
        Peter Parker foi picado por uma aranha radioativa e desde então usa seus poderes para
        proteger Nova York, equilibrando a vida de super-herói com a de estudante.
      </p>
    ),
  },
  {
    label: "Poderes",
    content: (
      <p className="app__panel-footer-text">
        Força e agilidade sobre-humanas, sentido aranha para prever perigo e lançadores de teia
        para se locomover pela cidade.
      </p>
    ),
  },
  {
    label: "Equipamentos",
    content: (
      <p className="app__panel-footer-text">
        Lançadores de teia no pulso, traje resistente a impactos e, em algumas versões, óculos com
        realidade aumentada do laboratório Stark.
      </p>
    ),
  },
];

export function TabsSection() {
  return (
    <section>
      <SectionTitle number="11" title="Tabs" />
      <Card>
        <Tabs tabs={TABS} />
      </Card>
    </section>
  );
}
