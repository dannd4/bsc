import { useSelector, useDispatch } from "../store";
import { increaseBy, increase } from "../slices/counter";
import { useEffect } from "react";
import { getTodos, todoSelector } from "../slices/todo";

export default function Redux() {
  const count = useSelector((state) => state.counter.count);
  const { todos, loading, error } = useSelector(todoSelector);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // dispatch(increase());
    dispatch(increaseBy(10));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
