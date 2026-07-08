import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renderiza o texto passado", () => {
    render(<Badge>v1.0</Badge>);
    expect(screen.getByText("v1.0")).toBeInTheDocument();
  });

  it.each(["primary", "secondary", "danger", "success", "neutral", "purple"] as const)(
    "aplica uma classe de variant válida para variant=%s (evita regressão do bug variant -> classe inexistente)",
    (variant) => {
      render(<Badge variant={variant}>Texto</Badge>);
      const badge = screen.getByText("Texto");
      // O stub de CSS Modules do Vitest devolve a própria chave como valor;
      // se o componente apontar pra uma classe que não existe no .module.scss,
      // esse valor vem undefined e "undefined" aparece na className.
      expect(badge.className).not.toContain("undefined");
    }
  );
});
