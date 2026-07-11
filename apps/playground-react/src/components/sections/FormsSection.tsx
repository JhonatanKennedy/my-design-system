import { Shield } from "lucide-react";
import { Button, Card, Input, SectionTitle, Select } from "@jhonatankennedy/ui-react";

const POWER_CLASS_OPTIONS = [
  "S-Class — Universe Level",
  "A-Class — City Level",
  "B-Class — Street Level",
  "C-Class — Support",
];

export function FormsSection() {
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
        <div className="app__form-actions">
          <Button variant="primary">
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
