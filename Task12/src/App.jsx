import React, { useState } from "react";
import "./app.css";

function App() {
  // State to track the hover state
  const [isHovered, setIsHovered] = useState(false);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="app-container">
      <h1>Mouse Hover Event Example</h1>
      <div
        className={`hover-box ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
    </div>
  );
}

export default App;
