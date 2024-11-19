import { useState } from "react";
import { useDispatch, useSelector } from "../store";
import { createTodo } from "../slices/todo";

export default function TodoCreate() {
  const [todo, setTodo] = useState("");

  const loading = useSelector((state) => state.todo.loading);
  const dispatch = useDispatch();

  const handleCreateTodo = async () => {
    try {
      await dispatch(createTodo(todo)).unwrap();
      // Tạo todo thành công, reset input
      setTodo("");
    } catch (error) {
      console.log("Create todo error", error);
      // notification.error("Create todo failed")
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full">
      <input
        className="flex-1 pl-6 pr-2 bg-transparent border-0 outline-none text-slate-700 h-14 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task"
        value={todo}
        onChange={(evt) => setTodo(evt.currentTarget.value)}
      />
      <button
        className="w-32 text-lg font-bold text-white bg-orange-600 border-none rounded-full cursor-pointer h-14"
        onClick={handleCreateTodo}
        disabled={loading}
      >
        ADD +
      </button>
    </div>
  );
}
