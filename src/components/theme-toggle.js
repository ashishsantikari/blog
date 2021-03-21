import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Toggle from "react-toggle";
import Sun from "../../content/assets/sunny.svg";
import Moon from "../../content/assets/moon.svg";

function ThemeToggle() {
  const isDarkMode = (theme) => theme === "dark";

  const selectedMode = (event) => {
    // prettier-ignore
    const { target: { checked } } = event;
    return checked ? "dark" : "light";
  };

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) =>
        theme === null ? (
          <div />
        ) : (
          <label>
            <Toggle
              name="dark mode"
              value="dark"
              checked={isDarkMode(theme)}
              onChange={(e) => toggleTheme(selectedMode(e))}
              icons={{
                checked: <Moon width={14} height={14} />,
                unchecked: <Sun width={14} height={14} />,
              }}
            />
          </label>
        )
      }
    </ThemeToggler>
  );
}

ThemeToggle.propTypes = {};

export default ThemeToggle;
