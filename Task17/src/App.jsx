import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Handler to toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="app">
      <h1>Toggle Visibility</h1>
      <button className="btn toggle" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <div className="content">
          <p>
            This is a sample paragraph. Click the button to toggle its
            visibility.
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="image"
          />
        </div>
      )}
    </div>
  );
};

export default App;
