import React from "react";
import { ThemeContext } from "./context/theme";

function ThemeProvider({ children }) {
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
