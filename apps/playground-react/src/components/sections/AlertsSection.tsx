import { Alert, SectionTitle } from "@my-design-system/ui-react";

export function AlertsSection() {
  return (
    <section>
      <SectionTitle number="07" title="Alertas" />
      <div className="app__stack-3">
        <Alert
          open
          variant="info"
          title="Nova missão disponível!"
          dismissible
          onDismiss={() => console.log("dismiss")}
        >
          Setor norte precisa de reforços. Confirme disponibilidade até as 18h de hoje.
        </Alert>
        <Alert open variant="warning" title="Atenção, herói!">
          Combustível do jato abaixo de 30%. Reabasteça antes da próxima missão.
        </Alert>
        <Alert open variant="danger" title="PERIGO MÁXIMO!">
          Intruso detectado no perímetro. Acione o protocolo de segurança imediatamente!
        </Alert>
        <Alert open variant="success" title="Missão cumprida!">
          Todos os objetivos completados. Retorno seguro ao quartel. Parabéns, herói!
        </Alert>
      </div>
    </section>
  );
}
