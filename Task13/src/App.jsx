import React, { useState } from "react";
import "./app.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Real-Time Input Handling</h1>
      <input
        type="text"
        className="text-input"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className="display-text">You typed: {inputValue}</p>
    </div>
  );
}

export default App;
