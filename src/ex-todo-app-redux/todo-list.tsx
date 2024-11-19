import { useSelector } from "../store";
import TodoItem from "./todo-item";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <section className="bg-white rounded-md">
      <div className="max-h-[600px] overflow-y-auto">
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </div>

      <div className="flex justify-between p-4 text-sm border-t-2">
        <span className="text-slate-700">1 item(s) left</span>
        <button className="text-slate-700">Clear Compleated</button>
      </div>
    </section>
  );
}
