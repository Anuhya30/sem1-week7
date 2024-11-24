import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="app">
      <h1 className="header">Show/Hide Component</h1>
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p className="text-element">This is the text element.</p>}
    </div>
  );
};

export default App;
