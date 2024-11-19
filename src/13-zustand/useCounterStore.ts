import { create } from "zustand";

interface CounterStore {
  count: number;

  actions: {
    increase: () => void;
    decrease: () => void;
    increaseBy: (num: number) => void;
  };
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  number: 0,

  actions: {
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    increaseBy: (num: number) => set((state) => ({ count: state.count + num })),
  },
}));

// export custom hooks hoặc sử dụng trực tiếp hook store nhưng nhớ phải sử dụng selector
export const useCounter = () => useCounterStore((state) => state.count);

// Ngược lại action k bao h thay đổi, có thể gom vào 1 hooks
export const useCounterActions = () => useCounterStore((state) => state.actions);

// const { count, number } = useCounterStore((state) => ({
//   count: state.count,
//   number: state.number,
// }));

// const { count, number } = useCounterStore();
