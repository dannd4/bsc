import { changeFilter, Filter } from "../slices/todo";
import { useDispatch, useSelector } from "../store";

export default function TodoFilter() {
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (filter: Filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <section className="flex justify-center gap-5 p-4 bg-white rounded-md">
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "all" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => handleChangeFilter("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "active" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => handleChangeFilter("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "completed" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => handleChangeFilter("completed")}
      >
        Completed
      </button>
    </section>
  );
}
