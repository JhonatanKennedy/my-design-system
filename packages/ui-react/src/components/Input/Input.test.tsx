import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("associa o label ao campo via htmlFor/id", () => {
    render(<Input label="E-mail" />);
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
  });

  it("mostra o helperText quando não há erro", () => {
    render(<Input label="E-mail" helperText="Usaremos só pra contato" />);
    expect(screen.getByText("Usaremos só pra contato")).toBeInTheDocument();
  });

  it("mostra a mensagem de erro no lugar do helperText quando error é string", () => {
    render(<Input label="E-mail" helperText="Usaremos só pra contato" error="E-mail inválido" />);
    expect(screen.getByText("E-mail inválido")).toBeInTheDocument();
    expect(screen.queryByText("Usaremos só pra contato")).not.toBeInTheDocument();
  });

  it("marca aria-invalid quando error é apenas boolean, sem exigir mensagem", () => {
    render(<Input label="E-mail" error />);
    expect(screen.getByLabelText("E-mail")).toHaveAttribute("aria-invalid", "true");
  });

  it("não marca aria-invalid quando não há erro", () => {
    render(<Input label="E-mail" />);
    expect(screen.getByLabelText("E-mail")).not.toHaveAttribute("aria-invalid");
  });

  it("liga a mensagem de erro ao campo via aria-describedby", () => {
    render(<Input label="E-mail" error="E-mail inválido" />);
    const input = screen.getByLabelText("E-mail");
    const describedBy = input.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy!)).toHaveTextContent("E-mail inválido");
  });

  it("respeita disabled e repassa eventos de digitação", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input label="Nome" onChange={onChange} />);

    await user.type(screen.getByLabelText("Nome"), "Ana");

    expect(onChange).toHaveBeenCalled();
    expect(screen.getByLabelText("Nome")).toHaveValue("Ana");
  });
});
