import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Validation button appears in the DOM", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Validate/i);
  expect(buttonElement).toBeInTheDocument();
});
