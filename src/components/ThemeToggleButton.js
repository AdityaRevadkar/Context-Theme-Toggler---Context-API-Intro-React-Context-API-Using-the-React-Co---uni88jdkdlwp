
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () =>{
     const contextVal = useContext(ThemeContext);

  const { theme, toggleTheme } = contextVal;

    
    return (
       <>
         <button
        className={`btn btn-${theme} txt-${theme}`}
        onClick={toggleTheme}
        id="global-theme-toggler"
      >
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
        </>
    )

}
export {ThemeToggleButton}
