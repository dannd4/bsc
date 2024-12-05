import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect } from "vitest";
import Redux from "../../13-redux/redux";
import { counterReducer } from "../../slices/counter";

// Create a mock store for testing
const createMockStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

// Wrapper for the component to provide the store
const wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={createMockStore()}>{children}</Provider>;
};

describe("Redux Component", () => {
  it("renders initial count", () => {
    render(<Redux />, { wrapper });

    expect(screen.getByText("Count: 0")).toBeDefined();
  });

  it("increases count by 10 when button is clicked", async () => {
    render(<Redux />, { wrapper });

    const button = screen.getByText("Increase");
    await userEvent.click(button);

    expect(screen.getByText("Count: 10")).toBeDefined();
  });
});
