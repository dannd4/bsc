import { Filter } from "./types";

interface TodoFilterProps {
  filter: Filter;
  onUpdateFilter: (filter: Filter) => void;
}

export default function TodoFilter({ filter, onUpdateFilter }: TodoFilterProps) {
  return (
    <section className="flex justify-center gap-5 p-4 bg-white rounded-md">
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "all" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => onUpdateFilter("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "active" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => onUpdateFilter("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`font-bold transition-all duration-700 hover:text-orange-600 ${
          filter === "completed" ? "text-orange-600" : "text-slate-700"
        }`}
        onClick={() => onUpdateFilter("completed")}
      >
        Completed
      </button>
    </section>
  );
}
