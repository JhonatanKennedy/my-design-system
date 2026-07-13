import { useState } from "react";
import { Shield } from "lucide-react";
import { Button, Card, Checkbox, Input, SectionTitle, Select } from "@jhonatankennedy/ui-react";

const POWER_CLASS_OPTIONS = [
  "S-Class — Universe Level",
  "A-Class — City Level",
  "B-Class — Street Level",
  "C-Class — Support",
];

export function FormsSection() {
  const [secretIdentity, setSecretIdentity] = useState(true);
  const [joinTeam, setJoinTeam] = useState(false);
  const [acceptRules, setAcceptRules] = useState(false);

  return (
    <section>
      <SectionTitle number="06" title="Formulários" />
      <Card>
        <div className="app__form-grid">
          <Input label="Nome do herói" placeholder="Ex: Peter Parker" helperText="teste" />
          <Input label="Superpoder" placeholder="Ex: Aranha, força, velocidade" />
          <Input label="Email" placeholder="heroi@universo.com" type="email" autocomplete="email" />
          <Input label="Senha secreta" placeholder="••••••••" type="password" />
          <Select label="Power Class" options={POWER_CLASS_OPTIONS} />
        </div>

        <p className="app__label app__label--panel" style={{ marginTop: "1.5rem" }}>
          Preferências
        </p>
        <div className="app__row--center">
          <Checkbox
            checked={secretIdentity}
            onChange={() => setSecretIdentity(!secretIdentity)}
            label="Manter identidade secreta"
          />
          <Checkbox
            checked={joinTeam}
            onChange={() => setJoinTeam(!joinTeam)}
            label="Entrar para um time de heróis"
          />
          <Checkbox
            checked={acceptRules}
            onChange={() => setAcceptRules(!acceptRules)}
            label="Aceito o código de conduta"
          />
        </div>

        <div className="app__form-actions">
          <Button variant="primary" disabled={!acceptRules}>
            <span className="app__icon-label">
              <Shield size={15} /> Cadastrar herói
            </span>
          </Button>
          <Button variant="ghost">Cancelar</Button>
        </div>
      </Card>
    </section>
  );
}
