import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const OPTIONS = ["Pequeno", "Médio", "Grande"];

describe("Select", () => {
  it("renderiza todas as options", () => {
    render(<Select label="Tamanho" options={OPTIONS} />);
    OPTIONS.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it("é controlável de fora via value/onChange", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Select label="Tamanho" options={OPTIONS} value="Pequeno" onChange={onChange} />);

    await user.selectOptions(screen.getByLabelText("Tamanho"), "Grande");

    expect(onChange).toHaveBeenCalled();
  });

  it("aceita disabled nativo", () => {
    render(<Select label="Tamanho" options={OPTIONS} disabled />);
    expect(screen.getByLabelText("Tamanho")).toBeDisabled();
  });

  it("mostra o helperText quando não há erro, e a mensagem de erro quando há", () => {
    const { rerender } = render(
      <Select label="Tamanho" options={OPTIONS} helperText="Escolha o tamanho ideal" />
    );
    expect(screen.getByText("Escolha o tamanho ideal")).toBeInTheDocument();

    rerender(
      <Select
        label="Tamanho"
        options={OPTIONS}
        helperText="Escolha o tamanho ideal"
        error="Campo obrigatório"
      />
    );
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
    expect(screen.queryByText("Escolha o tamanho ideal")).not.toBeInTheDocument();
  });
});
