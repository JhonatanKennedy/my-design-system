import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o texto passado como children", () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("chama onClick ao clicar", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Salvar</Button>);

    await user.click(screen.getByRole("button", { name: "Salvar" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("não chama onClick quando disabled", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button onClick={onClick} disabled>
        Salvar
      </Button>,
    );

    await user.click(screen.getByRole("button", { name: "Salvar" }));

    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "Salvar" })).toBeDisabled();
  });

  it("repassa atributos nativos (type, aria-label, etc.)", () => {
    render(
      <Button type="submit" aria-label="Enviar formulário">
        OK
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Enviar formulário" });
    expect(button).toHaveAttribute("type", "submit");
  });
});
