import { Check, Heart } from "lucide-react";
import { Badge, Button, Card, Progress, SectionTitle } from "@my-design-system/ui-react";
import { BLUE, GREEN, YELLOW } from "../../constants/colors";

export function CardsSection() {
  return (
    <section>
      <SectionTitle number="04" title="Cards" />
      <div className="app__card-grid">
        <Card rotation={-1.2} accent={YELLOW}>
          <div className="app__card-body">
            <Badge variant="primary">Novo</Badge>
            <h3 className="app__card-title">Herói da Ação</h3>
            <p className="app__card-text">
              Personagem com habilidades especiais e poderes extraordinários para missões
              impossíveis.
            </p>
            <Button size="sm" variant="primary">
              Ver mais
            </Button>
          </div>
        </Card>

        <Card rotation={0.6} accent={BLUE}>
          <div className="app__card-body">
            <Badge variant="secondary">Em andamento</Badge>
            <h3 className="app__card-title">Missão Secreta</h3>
            <p className="app__card-text">
              Infiltração de alto risco no quartel general inimigo. Risco máximo, recompensa máxima.
            </p>
            <div>
              <Progress value={42} variant="secondary" />
            </div>
          </div>
        </Card>

        <Card rotation={-0.5} accent={GREEN}>
          <div className="app__card-body">
            <div className="app__card-header-row">
              <Badge variant="success">Completo</Badge>
              <Heart size={20} className="app__heart-icon" />
            </div>
            <h3 className="app__card-title app__card-title--tight">Operação Vitória</h3>
            <p className="app__card-text">
              Missão cumprida com sucesso. Todos os objetivos alcançados. Retorno ao quartel base.
            </p>
            <Button size="sm" variant="success">
              <span className="app__icon-label app__icon-label--tight">
                <Check size={14} /> Concluído!
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
