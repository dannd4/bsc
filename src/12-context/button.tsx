import React from "react";
import { useTheme } from "./theme.context";

function Button({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme.primaryColor,
    color: theme.isDarkMode ? "#ffffff" : "#000000",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>{children}</button>;
}

export default Button;
