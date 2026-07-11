import { useState } from "react";
import { Button, Card, Progress, SectionTitle, Toggle } from "@jhonatankennedy/ui-react";

export function ControlsSection() {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(true);
  const [toggleC, setToggleC] = useState(false);
  const [power, setPower] = useState(68);

  return (
    <section>
      <SectionTitle number="09" title="Controles" />
      <div className="app__controls-grid">
        <Card>
          <p className="app__label app__label--panel">Toggles</p>
          <div className="app__stack-5">
            <Toggle checked={toggleA} onChange={() => setToggleA(!toggleA)} label="Modo Herói" />
            <Toggle
              checked={toggleB}
              onChange={() => setToggleB(!toggleB)}
              label="Poderes Ativados"
            />
            <Toggle
              checked={toggleC}
              onChange={() => setToggleC(!toggleC)}
              label="Modo Invisível"
            />
          </div>
          <div className="app__panel-footer">
            <p className="app__panel-footer-text">
              Estado atual:{" "}
              {[toggleA && "Herói", toggleB && "Poderes", toggleC && "Invisível"]
                .filter(Boolean)
                .join(", ") || "Nenhum ativo"}
            </p>
          </div>
        </Card>

        <Card>
          <p className="app__label app__label--panel">Barras de Progresso</p>
          <div className="app__stack-4">
            <Progress value={power} variant="primary" label="Nível de Poder" />
            <Progress value={75} variant="success" label="Saúde" />
            <Progress value={32} variant="danger" label="Energia" />
            <Progress value={88} variant="secondary" label="Escudo" />
            <div className="app__progress-actions">
              <Button size="sm" variant="ghost" onClick={() => setPower(Math.max(0, power - 10))}>
                − 10
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => setPower(Math.min(100, power + 10))}
              >
                + 10
              </Button>
              <Button size="sm" variant="danger" onClick={() => setPower(0)}>
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
