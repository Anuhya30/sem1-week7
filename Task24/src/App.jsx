import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    alert(`Input Value: ${inputValue}`);
    inputRef.current.value = ""; 
  };

  return (
    <div className="app">
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Something:
          <input ref={inputRef} type="text" placeholder="Type here..." className="input-field" />
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
