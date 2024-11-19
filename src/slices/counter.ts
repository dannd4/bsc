import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state) => {
      // Được tích hợp sẵn immer nên có thể thay đổi state như mutate
      // return {...state, count: state.count + 1}
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    increaseBy(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
  },
});

export const { increase, decrease, increaseBy } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
