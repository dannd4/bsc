import TickIcon from "../assets/tick.png";
import UntickIcon from "../assets/untick.png";
import DeleteIcon from "../assets/delete.png";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (todoId: string) => void;
}

export default function TodoItem({ todo, onDeleteTodo }: TodoItemProps) {
  return (
    <>
      <div className="flex items-center gap-8 px-4 my-3">
        <div className="flex items-center flex-1 cursor-pointer">
          <img src={todo.isComplete ? TickIcon : UntickIcon} alt="complete" className="w-7" />
          <div className="flex flex-col">
            <p className={`text-slate-700 ml-4 text-base font-bold decoration-slate-500`}>{todo.title}</p>
          </div>
        </div>
        <img src={DeleteIcon} alt="delete" className="w-4 cursor-pointer" onClick={() => onDeleteTodo(todo._id)} />
      </div>
    </>
  );
}
