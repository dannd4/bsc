import TodoItem from "./todo-item";
import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (todoId: string) => void
  onUpdateStatus: (todoId: string) => void
}

export default function TodoList({ todos, onDeleteTodo, onUpdateStatus }: TodoListProps) {
  return (
    <section className="bg-white rounded-md">
      <div data-testid="todo-list" className="max-h-[600px] overflow-y-auto">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateStatus={onUpdateStatus} />;
        })}
      </div>

      <div className="flex justify-between p-4 text-sm border-t-2">
        <span className="text-slate-700">1 item(s) left</span>
        <button className="text-slate-700">Clear Compleated</button>
      </div>
    </section>
  );
}
