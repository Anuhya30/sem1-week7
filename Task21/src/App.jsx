import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="app">
      <h1>Focus Input Field</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
        className="input-field"
      />
      <button onClick={focusInput} className="focus-button">
        Focus Input
      </button>
    </div>
  );
}

export default App;
