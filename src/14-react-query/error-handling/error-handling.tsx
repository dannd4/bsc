import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../apis/todo";
// import { useEffect } from "react";

export default function ErrorHandling() {
  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos("all"),
    // Cách 3: Sử dụng meta kết hợp với global callback
    meta: {
      success: () => `Get todos success`,
      error: (error) => `Error: ${error.message}`,
    },
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  // Cách 1: xử lý lỗi thông qua biến error trực tiếp trong component
  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }

  // Cách 2: Sử dụng useEffect nếu muốn hiển thị notification thay vì UI trực tiếp trong component
  // useEffect(() => {
  //   if(!error) return

  //   toast.error(error.message)
  // }, [error])

  return <div>ErrorHandling</div>;
}
