import React, { useState } from "react";
import "./app.css";

function App() {
  // State to track if there's an error
  const [hasError, setHasError] = useState(false);

  // Function to toggle the error state
  const toggleError = () => {
    setHasError((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <h1>Conditional Error Message</h1>
      {hasError && <p className="error-message">An error occurred. Please try again.</p>}
      <button className="toggle-button" onClick={toggleError}>
        {hasError ? "Clear Error" : "Simulate Error"}
      </button>
    </div>
  );
}

export default App;
