import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { todoReducer } from "./slices/todo";

// Async middleware: redux-thunk, redux-saga, redux-observable (rxjs)

// currying
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("Action:", action);
//   next(action);
// };

// const thunkMiddleware = (store) => (next) => (action) => {
//   if(typeof action === function) {
//     action(store.dispatch, store.getState)
//   }

//   next(action)
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },

  // middleware: (getDefaultMiddleware) => new Tuple(loggerMiddleware).concat(getDefaultMiddleware({
  //   thunk: false
  // }))
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Trong ứng dụng thực tế sẽ khai báo ở 1 file riêng. Eg: hooks/useReactRedux
export const useDispatch = useAppDispatch.withTypes<typeof store.dispatch>();
export const useSelector = useAppSelector.withTypes<RootState>();

export default store;
