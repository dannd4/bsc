import { useEffect } from "react";
import TodoCreate from "./todo-create";
import TodoFilter from "./todo-filter";
import TodoList from "./todo-list";
import { useDispatch, useSelector } from "../store";
import { getTodos } from "../slices/todo";

export default function TodoAppRedux() {
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <div className="flex flex-col gap-8 place-self-center min-w-[500px] w-1/3 rounded-xl pt-10">
        <div className="px-6">
          <h1 className="text-2xl font-bold uppercase tracking-[0.5em] text-orange-600">Todo</h1>
        </div>

        <TodoCreate />

        <TodoList />

        <TodoFilter />
      </div>
    </>
  );
}
