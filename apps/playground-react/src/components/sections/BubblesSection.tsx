import { SectionTitle, SpeechBubble } from "@jhonatankennedy/ui-react";
import { BLUE, GREEN, RED } from "../../constants/colors";

export function BubblesSection() {
  return (
    <section>
      <SectionTitle number="08" title="Balões de Fala" />
      <div className="app__bubble-stack">
        <div className="app__bubble-row">
          <div className="app__avatar" style={{ backgroundColor: BLUE }}>
            H
          </div>
          <div className="app__bubble-wrap app__bubble-wrap--rotate-neg">
            <SpeechBubble direction="left">
              <p className="app__bubble-text">Com grandes poderes vêm grandes responsabilidades!</p>
            </SpeechBubble>
          </div>
        </div>

        <div className="app__bubble-row app__bubble-row--reverse">
          <div className="app__avatar" style={{ backgroundColor: RED }}>
            V
          </div>
          <div className="app__bubble-wrap app__bubble-wrap--rotate-pos">
            <SpeechBubble direction="right" bg="#FCD12A">
              <p className="app__bubble-text">
                Isso é o que eles todos dizem... antes de perder para mim!
              </p>
            </SpeechBubble>
          </div>
        </div>

        <div className="app__bubble-row">
          <div className="app__avatar" style={{ backgroundColor: GREEN }}>
            A
          </div>
          <div className="app__bubble-wrap app__bubble-wrap--sm">
            <SpeechBubble direction="left">
              <p className="app__bubble-text">Eu prefiro ação a palavras. Vamos lá!</p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    </section>
  );
}
