import axios from "axios";

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  isComplete: boolean;
}

export type Filter = "all" | "active" | "completed";

const http = axios.create({
  baseURL: "https://api.freeapi.app",
  // baseURL: "https://freeapi-cybersoft.up.railway.app"
});

export const fetchTodos = async (filter: Filter) => {
  const mapper = {
    all: undefined,
    active: false,
    completed: true,
  };

  const response = await http.get<{ data: Todo[] }>(`/api/v1/todos`, {
    params: {
      complete: mapper[filter],
    },
  });
  return response.data.data;
};

export const createTodo = async (todo: string) => {
  const response = await http.post(`/api/v1/todos`, { title: todo });
  return response.data.data;
};

export const deleteTodo = async (todoId: string) => {
  const response = await http.delete(`/api/v1/todos/${todoId}`);
  return response.data.data;
};

export const updateStatusTodo = async (todoId: string) => {
  const response = await http.patch(`/api/v1/todos/toggle/status/${todoId}`);
  return response.data.data;
};
