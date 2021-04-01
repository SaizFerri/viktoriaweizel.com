import React, { createContext, useState, useEffect, useContext } from "react";
import ETheme from "../enums/theme.enum";

interface IThemeProvider {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ETheme.LIGHT);

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (theme === ETheme.LIGHT) {
      bodyClassList.remove("dark-theme");
      bodyClassList.add("light-theme");
      return;
    }

    bodyClassList.remove("light-theme");
    bodyClassList.add("dark-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<Partial<IThemeProvider>>({});
export const useTheme = (): IThemeProvider =>
  useContext(ThemeContext) as IThemeProvider;
