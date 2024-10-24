import TickIcon from "../assets/tick.png";
import UntickIcon from "../assets/untick.png";
import DeleteIcon from "../assets/delete.png";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <>
      <div className="flex items-center my-3 gap-8 px-4">
        <div className="flex flex-1 items-center cursor-pointer">
          <img src={todo.isComplete ? TickIcon : UntickIcon} alt="complete" className="w-7" />
          <div className="flex flex-col">
            <p className={`text-slate-700 ml-4 text-base font-bold decoration-slate-500`}>{todo.title}</p>
            <p className={`text-slate-700 ml-4 text-sm decoration-slate-500`}>{todo.description}</p>
          </div>
        </div>
        <img src={DeleteIcon} alt="delete" className="w-4 cursor-pointer" />
      </div>
    </>
  );
}
