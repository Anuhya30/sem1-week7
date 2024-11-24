import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  // Handlers for increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="app">
      <h1>Counter Application</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="button-group">
        <button className="btn increment" onClick={increment}>
          Increment
        </button>
        <button className="btn decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
