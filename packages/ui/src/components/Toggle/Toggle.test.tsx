import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("reflete o estado checked via aria-checked", () => {
    const { rerender } = render(
      <Toggle checked={false} onChange={() => {}} label="Notificações" />,
    );
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");

    rerender(<Toggle checked onChange={() => {}} label="Notificações" />);
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });

  it("chama onChange ao clicar", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Toggle checked={false} onChange={onChange} label="Notificações" />);

    await user.click(screen.getByRole("switch"));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("não chama onChange quando disabled", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Toggle
        checked={false}
        onChange={onChange}
        label="Notificações"
        disabled
      />,
    );

    await user.click(screen.getByRole("switch"));

    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("renderiza o label quando fornecido", () => {
    render(<Toggle checked={false} onChange={() => {}} label="Notificações" />);
    expect(screen.getByText("Notificações")).toBeInTheDocument();
  });
});
