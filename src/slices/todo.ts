import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  UnknownAction,
  AsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  isComplete: boolean;
}

export type Filter = "all" | "active" | "completed";

interface InitialState {
  todos: Todo[];
  filter: Filter;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  todos: [],
  filter: "all",
  loading: false,
  error: null,
};

// types/redux.ts
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

// utils/redux.ts
function isPendingAction(action: UnknownAction, callback: () => boolean): action is PendingAction {
  return callback() && typeof action.type === "string" && action.type.endsWith("/pending");
}
function isRejectedAction(action: UnknownAction, callback: () => boolean): action is RejectedAction {
  return callback() && typeof action.type === "string" && action.type.endsWith("/rejected");
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });

    builder.addMatcher<PendingAction>(
      (action) => isPendingAction(action, () => action.type.startsWith("todo/")),
      (state) => {
        state.loading = true;
      }
    );

    builder.addMatcher<RejectedAction>(
      (action) => isRejectedAction(action, () => action.type.startsWith("todo/")),
      (state, action) => {
        state.loading = false;
        state.error = (action.error as SerializedError).message || "Something went wrong";
      }
    );
  },
});

export const getTodos = createAsyncThunk("todo/getTodos", async (_, { getState }) => {
  const mapper = {
    all: undefined,
    active: false,
    completed: true,
  };

  try {
    const {
      todo: { filter },
    } = getState() as RootState;

    const response = await axios.get("https://api.freeapi.app/api/v1/todos", {
      params: {
        complete: mapper[filter],
      },
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Network error");
  }
});

export const createTodo = createAsyncThunk("todo/createTodo", async (todo: string, { dispatch }) => {
  try {
    await axios.post("https://api.freeapi.app/api/v1/todos", { title: todo });
    dispatch(getTodos());
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Network error");
  }
});

export const updateTodoStatus = createAsyncThunk("todo/updateTodoStatus", async (todoId: string, { dispatch }) => {
  try {
    await axios.patch(`https://api.freeapi.app/api/v1/todos/toggle/status/${todoId}`);
    dispatch(getTodos());
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Network error");
  }
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (todoId: string, { dispatch }) => {
  try {
    await axios.delete(`https://api.freeapi.app/api/v1/todos/${todoId}`);
    dispatch(getTodos());
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Network error");
  }
});

export const { changeFilter } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
