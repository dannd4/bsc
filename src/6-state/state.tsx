import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };

  const [message, setMessage] = useState("Hello BC55");
  const handleSetMessage = () => {
    const msg = prompt("Nhập vào message:") as string;
    setMessage(msg);
  };

  const [fruits, setFruits] = useState(["apple", "banana"]);
  const handleAddFruit = () => {
    const fruit = prompt("Nhập vào trái cây muốn thêm:") as string;
    // Nguyên tắc khi thay đổi state là array/object, luôn tạo ra array/object mới, thay đổi dữ liệu trên array/object mới đó, sau đó đưa vào hàm setter của state
    const newFruits = [...fruits, fruit];
    setFruits(newFruits);
  };
  const handleRemoveFruit = () => {
    const fruit = prompt("Nhập vào trái cây muốn xoá:") as string;

    // Cách 1: Tìm index và xoá bằng hàm splice
    // const newFruits = [...fruits];
    // const index = newFruits.findIndex((value) => value === fruit);
    // if (index !== -1) {
    //   newFruits.splice(index, 1);
    //   setFruits(newFruits);
    // }

    // Cách 2: Dùng hàm filter
    const newFruits = fruits.filter((value) => value !== fruit);
    setFruits(newFruits);
  };

  const [user, setUser] = useState({ username: "", email: "" });
  const handleChangeUsername = () => {
    const username = prompt("Nhập vào username:") as string;
    setUser({ ...user, username });
  };
  const handleChangeEmail = () => {
    const email = prompt("Nhập vào email:") as string;
    setUser({ ...user, email });
  };

  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <hr />
      <p>Message: {message}</p>
      <button onClick={handleSetMessage}>Set Message</button>
      <hr />
      <p>Fruits: {fruits.join(", ")}</p>
      <button onClick={handleAddFruit}>Add</button>
      <button onClick={handleRemoveFruit}>Remove</button>
      <hr />
      <p>
        User: {user.username} - {user.email}
      </p>
      <button onClick={handleChangeUsername}>Change Username</button>
      <button onClick={handleChangeEmail}>Change Email</button>
    </div>
  );
}
