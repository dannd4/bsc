import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Todo {
  _id: string;
  title: string;
  description?: string;
  isComplete: boolean;
}

interface InitialState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  selectors: {
    todoSelector: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });

    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  try {
    const response = await axios.get("https://api.freeapi.app/api/v1/todos");
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Network error");
  }
});

export const todoReducer = todoSlice.reducer;
export const { todoSelector } = todoSlice.selectors;
