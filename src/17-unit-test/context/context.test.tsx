import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { ThemeProvider, useTheme } from "../../12-context/theme.context";

const ThemeDisplay = () => {
  const { theme, toggleDarkMode } = useTheme();
  return (
    <>
      <div data-testid="theme-label">
        Theme: {theme.isDarkMode ? "dark" : "light"}
      </div>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </>
  );
};

describe("Theme Context", () => {
  test("should render initial theme correctly", () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-label")).toHaveTextContent("Theme: light");
  });

  test("should toggle theme when button is clicked", async () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    // Initial state
    expect(screen.getByTestId("theme-label")).toHaveTextContent("Theme: light");

    // First click - should change to dark
    await userEvent.click(button);
    expect(screen.getByTestId("theme-label")).toHaveTextContent("Theme: dark");

    // Second click - should change back to light
    await userEvent.click(button);
    expect(screen.getByTestId("theme-label")).toHaveTextContent("Theme: light");
  });
});
