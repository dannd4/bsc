import { useState, useEffect } from "react";
import axios from "axios";
import { Post, User } from "./types";

export default function Effect() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: selectedUser || undefined,
        },
      });
      setPosts(response.data);
    };

    fetchPosts();
  }, [selectedUser]);

  return (
    <div>
      <h1>Effect</h1>

      <select value={selectedUser} onChange={(evt) => setSelectedUser(evt.target.value)}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
