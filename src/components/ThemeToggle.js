import React from "react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme === null) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const switcher = document.getElementById("switch");
    const switcherButton = document.getElementById("switchButton");
    switcherButton.classList.add("active");

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      switcher.style.transform = "translateX(100%)";
    } else {
      switcher.style.transform = "translateX(0)";
    }
  };
  return (
    <div className="theme">
      <button
        id="switchButton"
        onClick={toggleTheme}
        type="button"
        className=" theme__button"
      >
        <div id="switch" className="theme__switch"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
