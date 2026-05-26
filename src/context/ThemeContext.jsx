import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({
  children,
}) => {

  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem("theme")
        !== "light"
    );

  useEffect(() => {

    document.body.className =
      darkMode ? "dark" : "light";

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme: () =>
          setDarkMode(!darkMode),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
  useContext(ThemeContext);