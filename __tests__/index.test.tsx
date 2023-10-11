import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";
import { handlers } from '../mocks/handlers';

it("Should have two buttons with text", () => {
  render(<Home />);

  const buttons = screen.getAllByRole("button");

  expect(buttons.length).toBe(2);

  expect(buttons[0]).toHaveTextContent("Página Anterior");
  expect(buttons[1]).toHaveTextContent("Próxima Página");
});

it("Should render the input", () => {
  render(<Home />);

  const input = screen.getByRole("searchbox");

  expect(input).toBeInTheDocument();
});

it("Should pass text for Home", () => {
  const { getByTestId } = render(<Home />);

  const input = getByTestId("input-filho");

  fireEvent.change(input, { target: { value: "Teste" } });

  const textOnParent = screen.getByTestId("text-parent");

  expect(textOnParent.textContent).toBe("Teste");
});