import { describe, it, expect, Mocked } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp, {http} from "../../ex-todo-app/todo-app";

const mockTodos = [
  { _id: "1", title: "Learn React", complete: false },
  { _id: "2", title: "Learn Redux", complete: true },
];

const mockedHttp = http as unknown as Mocked<typeof http>;

describe("TodoApp", () => {
  it("should render with todos", async () => {
    // Mock get request to get todos
    mockedHttp.get.mockResolvedValueOnce({ data: { data: mockTodos } });

    render(<TodoApp />);

    await waitFor(() => {
      expect(screen.getByTestId("todo-list").children).toHaveLength(2);
      expect(screen.getByText("Learn React")).toBeInTheDocument();
      expect(screen.getByText("Learn Redux")).toBeInTheDocument();
    });
  });

  it("should create new todo", async () => {
    const newTodo = { _id: "3", title: "Learn Unit Test", complete: false };
    mockedHttp.get.mockResolvedValueOnce({ data: { data: mockTodos } });
    mockedHttp.post.mockResolvedValueOnce({ data: { data: newTodo } });

    render(<TodoApp />);

    // Simulate event user create todo
    const input = screen.getByTestId("todo-add-input");
    const button = screen.getByTestId("todo-add-button");
    await userEvent.type(input, newTodo.title);
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockedHttp.post).toHaveBeenCalledWith("/api/v1/todos", {
        title: newTodo.title,
      });
    });

    await waitFor(() => {
      expect(mockedHttp.get).toHaveBeenCalledTimes(2); // Lần 1 khi mount, lần 2 khi refetch data sau khi create
    });
  });

  // it("should update todo status")

  // it("should delete todo")

  // it("should update todos when filter change")
});
