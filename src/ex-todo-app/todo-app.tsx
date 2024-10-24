import TodoCreate from "./todo-create";
import TodoFilter from "./todo-filter";
import TodoList from "./todo-list";

const todos = [
  { id: 1, title: "Learn React", description: "Learn React to build awesome web apps", isComplete: true },
  { id: 2, title: "Learn Next", description: "Learn Next to build awesome web apps", isComplete: false },
];

export default function TodoApp() {
  return (
    <>
      <div className="flex flex-col gap-8 place-self-center min-w-[500px] w-1/3 rounded-xl pt-10">
        <div className="px-6">
          <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-orange-600">Todo</h1>
        </div>

        <TodoCreate />

        <TodoList todos={todos} />

        <TodoFilter />
      </div>
    </>
  );
}
