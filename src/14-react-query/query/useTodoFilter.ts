import { create } from "zustand";
import { Filter } from "../../apis/todo";

interface TodoFilterState {
  filter: Filter;

  actions: {
    changeFilter: (filter: Filter) => void;
  };
}

const useTodoFilterBase = create<TodoFilterState>()((set) => ({
  filter: "all",

  actions: {
    changeFilter: (filter) => set(() => ({ filter })),
  },
}));

export const useTodoFilter = () => useTodoFilterBase((state) => state.filter);
export const useTodoFilterActions = () => useTodoFilterBase((state) => state.actions);
