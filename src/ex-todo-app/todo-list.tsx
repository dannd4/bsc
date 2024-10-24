import TodoItem from "./todo-item";
import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <section className="rounded-md bg-white">
      <div className="max-h-[600px] overflow-y-auto">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>

      <div className="flex justify-between p-4 text-sm border-t-2">
        <span className="text-slate-700">1 item(s) left</span>
        <button className="text-slate-700">Clear Compleated</button>
      </div>
    </section>
  );
}
