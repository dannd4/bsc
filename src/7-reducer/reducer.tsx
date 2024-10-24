import { useReducer } from "react";

type State = {
  count: number;
  todos: string[];
};

type Action =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "increaseBy"; payload: number }
  | { type: "reset" }
  | { type: "addTodo"; payload: string };

const initialState: State = {
  count: 0,
  todos: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    case "increaseBy":
      return { ...state, count: state.count + action.payload };
    case "reset":
      return initialState;
    case "addTodo": {
      const newTodos = [...state.todos, action.payload];
      return { ...state, todos: newTodos };
    }
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    // { type: "increase" } => action
    dispatch({ type: "increase" }); // dispatch action sẽ gọi tới hàm reducer và truyền vào action
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const handleIncreaseBy = () => {
    const num = Number(prompt("Enter a number"));
    dispatch({ type: "increaseBy", payload: num });
  };

  const handleAddTodo = () => {
    const todo = prompt("Enter a number") as string;
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div>
      <h1>Reducer</h1>

      <p>Count: {state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncreaseBy}>Increase by 5</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <p>Todos: {state.todos.join(", ")}</p>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
