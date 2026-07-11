import { Badge, Card, SectionTitle } from "@jhonatankennedy/ui-react";

export function BadgesSection() {
  return (
    <section>
      <SectionTitle number="05" title="Badges" />
      <Card>
        <div className="app__stack-4">
          <div>
            <p className="app__label app__label--lg">Variantes</p>
            <div className="app__row">
              <Badge variant="primary">Destaque</Badge>
              <Badge variant="secondary">Info</Badge>
              <Badge variant="danger">Crítico</Badge>
              <Badge variant="success">Sucesso</Badge>
              <Badge variant="purple">Beta</Badge>
              <Badge variant="neutral">Neutro</Badge>
            </div>
          </div>
          <div>
            <p className="app__label app__label--lg">Em contexto</p>
            <div className="app__row--gap4">
              <span className="app__inline-text">
                Personagem <Badge variant="primary">Novo</Badge>
              </span>
              <span className="app__inline-text">
                Status <Badge variant="success">Ativo</Badge>
              </span>
              <span className="app__inline-text">
                Versão <Badge variant="neutral">v2.4</Badge>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
