import { Badge, SectionTitle } from "@my-design-system/ui-react";
import { BLUE, GREEN, INK, RED, YELLOW } from "../../constants/colors";

const COLORS = [
  { name: "Amarelo", hex: YELLOW, label: "Primary", dark: false },
  { name: "Azul", hex: BLUE, label: "Secondary", dark: true },
  { name: "Vermelho", hex: RED, label: "Accent", dark: true },
  { name: "Verde", hex: GREEN, label: "Success", dark: true },
  { name: "Tinta", hex: INK, label: "Foreground", dark: true },
];

export function ColorsSection() {
  return (
    <section>
      <SectionTitle number="01" title="Paleta de Cores" />
      <div className="app__color-grid">
        {COLORS.map((c) => (
          <div key={c.name} className="app__color-card">
            <div className="app__color-swatch" style={{ backgroundColor: c.hex }} />
            <div className="app__color-body">
              <p className="app__color-name">{c.name}</p>
              <p className="app__color-hex">{c.hex}</p>
              <Badge variant="neutral">{c.label}</Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
