import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { theme } from "@/styles/theme";
import { Button } from "./Button";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Button", () => {
  it("renders children correctly", () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies variant correctly", () => {
    renderWithTheme(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-variant", "primary");
  });

  it("shows loading state", () => {
    renderWithTheme(<Button isLoading>Loading</Button>);
    expect(screen.getByTestId("button-spinner")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
  });
});