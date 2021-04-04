import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import ETheme from "../enums/theme.enum";
import { useTheme } from "./ThemeProvider";

const ThemeToggler = ({ onToggle }) => {
  const { theme } = useTheme();
  return (
    <>
      <input
        type="checkbox"
        onChange={onToggle}
        name="chooseTheme"
        id="chooseTheme"
        className="d-none"
        checked={theme === ETheme.DARK}
      />
      <label htmlFor="chooseTheme">
        {theme === ETheme.LIGHT ? (
          <FaMoon />
        ) : (
          <FaSun style={{ color: "var(--white)" }} />
        )}
      </label>
    </>
  );
};

export default ThemeToggler;
