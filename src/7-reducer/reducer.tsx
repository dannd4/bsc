import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increase" } | { type: "decrease" } | { type: "increaseBy"; payload: number } | { type: "reset" };

const initialState: State = {
  count: 0,
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
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };

  const handleIncreaseBy = () => {
    const num = Number(prompt("Enter a number"));
    dispatch({ type: "increaseBy", payload: num });
  };

  return (
    <div>
      <h1>Reducer</h1>

      <p>Count: {state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncreaseBy}>Increase by 5</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
