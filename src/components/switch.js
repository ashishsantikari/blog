import React from "react";
import PropTypes from "prop-types";
import "./switch.css"

function Switch({ theme, toggleTheme }) {
    return (
      <div className="switchLayout">
        <label>
          <input type="checkbox" onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                 checked={theme === "dark"} />{" "} Dark Mode
        </label>
      </div>
    );
}

Switch.propType = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
};

export default Switch;
