import React from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import {
  useTheme,
} from "../context/ThemeContext";

const ThemeToggle = () => {

  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  return (

    <button

      onClick={toggleTheme}

      className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition duration-300 flex items-center gap-3"
    >

      {
        darkMode
          ? <FaSun />
          : <FaMoon />
      }

      {
        darkMode
          ? "Light Mode"
          : "Dark Mode"
      }

    </button>
  );
};

export default ThemeToggle;