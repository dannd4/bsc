import { useTheme } from "./theme.context";

function Controls() {
  const { theme, toggleDarkMode } = useTheme();

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={theme.isDarkMode}
            onChange={toggleDarkMode}
          />
        </label>
      </div>
    </div>
  );
}

export default Controls;
