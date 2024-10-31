import React from "react";
import { useTheme } from "../theme.context";
import { useUser } from "../UserContext";

export const Content: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login } = useUser();

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        padding: "2rem",
        minHeight: "200px",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      {!user && (
        <button onClick={login} style={{ marginLeft: "1rem" }}>
          Login
        </button>
      )}
      <p>This is a demo of React Context API with TypeScript</p>
      <p>
        Current theme: {theme.background === "#121212" ? "Dark" : "Light"}
      </p>
    </div>
  );
};