import TickIcon from "../assets/tick.png";
import UntickIcon from "../assets/untick.png";
import DeleteIcon from "../assets/delete.png";
import { Todo } from "./types";
import { useDispatch } from "../store";
import { deleteTodo, updateTodoStatus } from "../slices/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    dispatch(updateTodoStatus(todo._id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <>
      <div className="flex items-center gap-8 px-4 my-3">
        <div className="flex items-center flex-1 cursor-pointer">
          <img
            src={todo.isComplete ? TickIcon : UntickIcon}
            alt="complete"
            className="w-7"
            onClick={handleUpdateStatus}
          />
          <div className="flex flex-col">
            <p className={`text-slate-700 ml-4 text-base font-bold decoration-slate-500`}>{todo.title}</p>
          </div>
        </div>
        <img src={DeleteIcon} alt="delete" className="w-4 cursor-pointer" onClick={handleDeleteTodo} />
      </div>
    </>
  );
}
