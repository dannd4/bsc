import { useTheme } from "./theme.context";

function Controls() {
  const { theme, toggleDarkMode } = useTheme();

  return (
    <div className="mb-4">
      <div>
        <label data-testid="theme-label">
          Theme: {theme.isDarkMode ? "dark" : "light"}
          <input type="checkbox" checked={theme.isDarkMode} onChange={toggleDarkMode} />
        </label>
      </div>
    </div>
  );
}

export default Controls;
