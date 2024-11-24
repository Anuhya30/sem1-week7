import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  // Handler for input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app">
      <h1>Input State Example</h1>
      <input
        type="text"
        className="text-input"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className="output">You typed: {inputValue}</p>
    </div>
  );
};

export default App;
