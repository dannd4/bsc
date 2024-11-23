import { useQuery, skipToken } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => resp.data);
};

const getPosts = (userId: string) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((resp) => resp.data);
};

export default function LazyQuery() {
  const [userId, setUserId] = useState<string>();

  const { data: users, isPending: isUsersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    staleTime: 0,
  });

  const { data: posts, isLoading: isPostsLoading } = useQuery({
    queryKey: ["posts", userId],
    queryFn: userId ? () => getPosts(userId) : skipToken,
    enabled: !!userId,
  });

  return (
    <div>
      <select onChange={(evt) => setUserId(evt.target.value)}>
        {isUsersLoading ? (
          <option value="">Loading users...</option>
        ) : (
          <>
            <option value="">Select a user</option>
            {users?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </>
        )}
      </select>

      {isPostsLoading ? (
        <h1>Loading Posts</h1>
      ) : (
        <ul>
          {posts?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
