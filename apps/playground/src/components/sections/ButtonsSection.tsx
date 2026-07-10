import { Check, Sparkles, Star, X, Zap } from "lucide-react";
import { Button, Card, SectionTitle } from "@my-design-system/ui-react";

export function ButtonsSection() {
  return (
    <section>
      <SectionTitle number="03" title="Botões" />
      <Card>
        <div className="app__stack-7">
          <div>
            <p className="app__label app__label--lg">Variantes</p>
            <div className="app__row">
              <Button variant="primary">Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="danger">Perigo</Button>
              <Button variant="success">Sucesso</Button>
              <Button variant="purple">Roxo</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div>
            <p className="app__label app__label--lg">Tamanhos</p>
            <div className="app__row--center">
              <Button size="sm">Pequeno</Button>
              <Button size="md">Médio</Button>
              <Button size="lg">Grande</Button>
            </div>
          </div>
          <div>
            <p className="app__label app__label--lg">Com ícone</p>
            <div className="app__row">
              <Button variant="primary">
                <span className="app__icon-label">
                  <Star size={15} /> Favoritar
                </span>
              </Button>
              <Button variant="secondary">
                <span className="app__icon-label">
                  <Zap size={15} /> Turbo
                </span>
              </Button>
              <Button variant="danger">
                <span className="app__icon-label">
                  <X size={15} /> Deletar
                </span>
              </Button>
              <Button variant="success">
                <span className="app__icon-label">
                  <Check size={15} /> Confirmar
                </span>
              </Button>
              <Button variant="ghost">
                <span className="app__icon-label">
                  <Sparkles size={15} /> Mágico
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
