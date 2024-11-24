import React from "react";
import "./app.css";

function App() {
  // Function to handle the button click
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="app-container">
      <h1>Click Event Example</h1>
      <button className="click-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
