import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label
        className="form-check-label text-muted"
        htmlFor="flexSwitchCheckDefault"
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};

export default ThemeToggler;
