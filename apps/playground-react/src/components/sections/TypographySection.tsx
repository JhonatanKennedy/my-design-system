import { Card, SectionTitle } from "@jhonatankennedy/ui-react";

export function TypographySection() {
  return (
    <section>
      <SectionTitle number="02" title="Tipografia" />
      <Card>
        <div className="app__stack-5">
          <div className="app__type-block">
            <p className="app__label">Display · Bangers</p>
            <p className="app__type-display">TÍTULO PRINCIPAL</p>
          </div>
          <div className="app__type-block">
            <p className="app__label">Heading · Comic Neue Black</p>
            <p className="app__type-heading">Subtítulo de Seção</p>
          </div>
          <div className="app__type-block">
            <p className="app__label">Body · Comic Neue Regular</p>
            <p className="app__type-body">
              Texto de corpo com boa legibilidade. O Comic Neue mantém o charme hand-drawn sem
              sacrificar a leitura em blocos de texto corrido. Ideal para parágrafos, descrições e
              conteúdo editorial.
            </p>
          </div>
          <div>
            <p className="app__label">Label · Space Mono</p>
            <p className="app__type-mono">STATUS: ACTIVE · VERSION: 1.0.0 · BUILD: 2026-07-03</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
