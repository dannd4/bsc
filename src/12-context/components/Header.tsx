import React from "react";
import { useTheme } from "../theme.context";
import { useUser } from "../UserContext";

export const Header: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useUser();

  return (
    <div style={{ background: theme.primary, padding: "1rem" }}>
      <h1 style={{ color: theme.background }}>Context Demo</h1>
      {user && (
        <div>
          <span style={{ color: theme.background }}>
            Welcome, {user.name}!
          </span>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};