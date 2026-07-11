import { ArrowRight } from "lucide-react";
import { Button, SpeechBubble } from "@jhonatankennedy/ui-react";

export function Hero() {
  return (
    <section className="app__hero">
      <div className="app__hero-stripes" />

      <div className="app__hero-grid">
        {/* left */}
        <div>
          <div className="app__hero-eyebrow">Design System</div>
          <h1 className="app__hero-title">INK UI</h1>
          <p className="app__hero-text">
            Design system com alma de quadrinhos. Traços ousados, sombras offset e tipografia
            expressiva para qualquer projeto.
          </p>
          <div className="app__hero-actions">
            <Button size="lg">
              <span className="app__icon-label">
                Começar <ArrowRight size={18} />
              </span>
            </Button>
            <Button variant="ghost" size="lg">
              Ver Docs
            </Button>
          </div>
        </div>

        {/* right — speech bubbles */}
        <div className="app__hero-right">
          <div className="app__hero-bubble-1">
            <SpeechBubble direction="left">
              <p className="app__bubble-text">POW! Componentes que chamam atenção!</p>
            </SpeechBubble>
          </div>
          <div className="app__hero-bubble-2">
            <SpeechBubble direction="right" bg="#FCD12A">
              <p className="app__bubble-text">100% customizável. Zero lorem ipsum.</p>
            </SpeechBubble>
          </div>

          {/* star burst */}
          <div className="app__hero-burst">
            <div className="app__hero-burst-shape">
              <span className="app__hero-burst-text">ZAP!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
