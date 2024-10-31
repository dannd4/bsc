export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  isDarkMode: boolean;
}

export interface ThemeContextType {
  theme: Theme;
  toggleDarkMode: () => void;
}