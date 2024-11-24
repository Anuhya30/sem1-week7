import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "app dark" : "app light"}>
      <h1>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h1>
      <p>This is a simple theme toggler application.</p>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default App;
