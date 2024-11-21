import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, Filter } from "../../apis/todo";
// import { useTodoFilter, useTodoFilterActions } from "./useTodoFilter";

export default function Query() {
  // Local state
  const [filter, setFilter] = useState<Filter>("all");

  // Integrate with other client state management
  // const filter = useTodoFilter();
  // const { changeFilter: setFilter } = useTodoFilterActions();

  const { data, status, error } = useQuery({
    queryKey: ["todos", filter],
    queryFn: () => fetchTodos(filter),
    // transform data
    select: (data) =>
      data.map((todo) => ({ ...todo, title: todo.title.toUpperCase() })),

    // Memoizes with useCallback
    // select: useCallback(
    //   (data: Todos) => data.map((todo) => todo.name.toUpperCase()),
    //   []
    // ),
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <ul>
        {data.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        <button className="btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="btn" onClick={() => setFilter("active")}>
          Active
        </button>
        <button className="btn" onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>
    </>
  );
}
