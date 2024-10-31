import React, { createContext, useContext, useState, useCallback } from "react";
import { Theme, ThemeContextType } from "./types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({
    primaryColor: "#007bff",
    secondaryColor: "#6c757d",
    isDarkMode: false,
  });

  const toggleDarkMode = useCallback(() => {
    setTheme((prev) => ({
      ...prev,
      isDarkMode: !prev.isDarkMode,
      primaryColor: !prev.isDarkMode ? "#1a1a1a" : "#007bff",
      secondaryColor: !prev.isDarkMode ? "#4a4a4a" : "#6c757d"
    }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};