import { useState } from "react";

interface TodoCreateProps {
  onCreateTodo: (todo: string) => void;
}

export default function TodoCreate({ onCreateTodo }: TodoCreateProps) {
  const [todo, setTodo] = useState("");

  const handleCreateTodo = () => {
    onCreateTodo(todo);
  };

  return (
    <div className="flex items-center bg-white rounded-full">
      <input
        className="flex-1 pl-6 pr-2 bg-transparent border-0 outline-none text-slate-700 h-14 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task"
        onChange={(evt) => setTodo(evt.currentTarget.value)}
      />
      <button
        className="w-32 text-lg font-bold text-white bg-orange-600 border-none rounded-full cursor-pointer h-14"
        onClick={handleCreateTodo}
      >
        ADD +
      </button>
    </div>
  );
}
