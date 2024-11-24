import React from "react";
import "./App.css";

const App = () => {
  const groceries = ["Apples", "Bananas", "Carrots", "Doughnuts", "Eggs"];

  return (
    <div className="app">
      <h1 className="header">Grocery List</h1>
      <ul className="grocery-list">
        {groceries.map((item, index) => (
          <li key={index} className="grocery-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
