import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renderiza título e conteúdo", () => {
    render(<Alert title="Atenção">Confira os dados antes de continuar.</Alert>);
    expect(screen.getByText("Atenção")).toBeInTheDocument();
    expect(
      screen.getByText("Confira os dados antes de continuar."),
    ).toBeInTheDocument();
  });

  it("não mostra botão de fechar quando onDismiss não é passado", () => {
    render(<Alert>Mensagem</Alert>);
    expect(
      screen.queryByRole("button", { name: "Fechar" }),
    ).not.toBeInTheDocument();
  });

  it("mostra botão de fechar e chama onDismiss quando fornecido", async () => {
    const onDismiss = vi.fn();
    const user = userEvent.setup();
    render(<Alert onDismiss={onDismiss}>Mensagem</Alert>);

    const closeButton = screen.getByRole("button", { name: "Fechar" });
    await user.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
