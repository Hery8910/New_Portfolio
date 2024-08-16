import React from "react";
import "./ThemeToggle.css";
import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
     className="theme-toggle" 
     onClick={toggleTheme}
     aria-label="Theme toggle"
    >
      {theme === "light" ? <ImSun /> : <BsMoon />}
    </button>
  );
}
