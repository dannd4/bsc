import React, { useState, useMemo, useCallback } from "react";

interface Item {
  id: number;
  name: string;
}

const ExpensiveList: React.FC<{ items: Item[] }> = React.memo(({ items }) => {
  console.log("ExpensiveList rendered");
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

const Performance: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // Not using useMemo - recalculates on every render
  // const expensiveValue = items.reduce((sum, item) => sum + item.id, 0);

  // Using useMemo to memoize expensive computation
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value...");
    return items.reduce((sum, item) => sum + item.id, 0);
  }, [items]);

  // Not using useCallback - recalculates on every render
  // const handleAddItem = () => {
  //   console.log("handleAddItem called");
  //   setItems((prevItems) => [
  //     ...prevItems,
  //     {
  //       id: prevItems.length + 1,
  //       name: `Item ${prevItems.length + 1}`,
  //     },
  //   ]);
  // }

  // Using useCallback to memoize function reference
  const handleAddItem = useCallback(() => {
    console.log("handleAddItem called");
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length + 1,
        name: `Item ${prevItems.length + 1}`,
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Performance Demo</h2>

      <div>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment Count: {count}
        </button>
      </div>

      <div>
        <p>Expensive Computed Value: {expensiveValue}</p>
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ExpensiveList items={items} />
    </div>
  );
};

export default Performance;
