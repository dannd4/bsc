import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import TodoCreate from "./todo-create";
import TodoFilter from "./todo-filter";
import TodoList from "./todo-list";
import { Filter, Todo } from "./types";

const http = axios.create({
  baseURL: "https://api.freeapi.app",
  // baseURL: "https://freeapi-cybersoft.up.railway.app"
});

const fetchTodos = async (filter: Filter) => {
  const mapper = {
    all: undefined,
    active: false,
    completed: true,
  };

  const response = await http.get(`/api/v1/todos`, {
    params: {
      complete: mapper[filter],
    },
  });
  return response.data.data;
};

const createTodo = async (todo: string) => {
  const response = await http.post(`/api/v1/todos`, { title: todo });
  return response.data.data;
};

const deleteTodo = async (todoId: string) => {
  const response = await http.delete(`/api/v1/todos/${todoId}`);
  return response.data.data;
};

const updateStatusTodo = async (todoId: string) => {
  const response = await http.patch(`/api/v1/todos/toggle/status/${todoId}`);
  return response.data.data;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const getTodos = useCallback(async () => {
    const data = await fetchTodos(filter);
    setTodos(data);
  }, [filter]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleCreateTodo = async (todo: string) => {
    const data = await createTodo(todo);
    // C1: Update local
    // setTodos([data, ...todos]);

    // C2: Gọi lại API get
    getTodos();
  };

  const handleDeleteTodo = async (todoId: string) => {
    await deleteTodo(todoId);
    getTodos();
  };

  const handleUpdateStatus = async (todoId: string) => {
    await updateStatusTodo(todoId);
    getTodos();
  };

  const handleUpdateFilter = (filter: Filter) => {
    setFilter(filter);
  };

  return (
    <>
      <div className="flex flex-col gap-8 place-self-center min-w-[500px] w-1/3 rounded-xl pt-10">
        <div className="px-6">
          <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-orange-600">Todo</h1>
        </div>

        <TodoCreate onCreateTodo={handleCreateTodo} />

        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateStatus={handleUpdateStatus} />

        <TodoFilter filter={filter} onUpdateFilter={handleUpdateFilter} />
      </div>
    </>
  );
}
