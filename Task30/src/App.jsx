import React, { useState } from "react";
import "./App.css";

// Import images
import lightImage from "./assets/light-mode.jpg";
import darkImage from "./assets/dark-mode.jpg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme} className="toggle-button">
        Toggle Theme
      </button>
      <div className="image-container">
        <img
          src={isDarkMode ? darkImage : lightImage}
          alt={isDarkMode ? "Dark Mode" : "Light Mode"}
          className="theme-image"
        />
      </div>
    </div>
  );
}

export default App;
