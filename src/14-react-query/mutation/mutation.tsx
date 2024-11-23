import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, fetchTodos } from "../../apis/todo";

export default function Mutation() {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos("all"),
  });

  const {
    mutate,
    mutateAsync,
    isPending: isCreatingTodo,
  } = useMutation({
    mutationFn: (todo: string) => createTodo(todo),
    // Awaited
    // onSuccess: () => {
    //   return queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },

    // Not awaited
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["todos"] });
    // },

    meta: {
      invalidateKeys: [["todos"]],
    },
  });

  const handleCreateTodo = async () => {
    const todo = prompt("Enter a new todo:");
    if (!todo) return;

    mutate(todo, {
      onSuccess(data) {
        console.log(data);
      },
    });

    // try {
    //   const data = await mutateAsync(todo);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <ul>
        {data.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>

      <button className="btn" onClick={handleCreateTodo} disabled={isCreatingTodo}>
        Add Todo
      </button>
    </>
  );
}
