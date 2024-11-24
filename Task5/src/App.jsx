import React from "react";
import "./index.css";

const App = () => {
  const colors = ["Red", "Green", "Blue", "Yellow", "Orange"];

  return (
    <div className="app">
      <h1 className="header">Color List</h1>
      <ul className="color-list">
        {colors.map((color, index) => (
          <li key={index} className="color-item">
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
