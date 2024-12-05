import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TodoCreate from "../../ex-todo-app/todo-create";

describe("TodoCreate", () => {
  it("should render correctly", () => {
    const mockOnCreateTodo = vi.fn();
    render(<TodoCreate onCreateTodo={mockOnCreateTodo} />);

    expect(screen.getByTestId("todo-add-input")).toBeInTheDocument();
    expect(screen.getByTestId("todo-add-button")).toBeInTheDocument();
  });

  it("should call onCreateTodo when add button is clicked", async () => {
    const mockOnCreateTodo = vi.fn();
    render(<TodoCreate onCreateTodo={mockOnCreateTodo} />);

    const input = screen.getByTestId("todo-add-input")
    const button = screen.getByTestId("todo-add-button")

    await userEvent.type(input, "Learn React")
    await userEvent.click(button)

    expect(mockOnCreateTodo).toBeCalledWith("Learn React")
  })
});
