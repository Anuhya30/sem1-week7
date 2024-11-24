import React, { useState } from "react";
import "./app.css";

function App() {
  // State to track the status
  const [status, setStatus] = useState("idle"); // idle | processing | success | error

  // Functions to update the status
  const startProcessing = () => setStatus("processing");
  const showSuccess = () => setStatus("success");
  const showError = () => setStatus("error");
  const resetStatus = () => setStatus("idle");

  // Function to render the status message
  const renderStatusMessage = () => {
    switch (status) {
      case "processing":
        return <p className="status processing">Processing... Please wait.</p>;
      case "success":
        return <p className="status success">Operation Successful!</p>;
      case "error":
        return <p className="status error">An error occurred. Please try again.</p>;
      default:
        return <p className="status idle">System is idle.</p>;
    }
  };

  return (
    <div className="app-container">
      <h1>Multi-Condition Status Message</h1>
      {renderStatusMessage()}
      <div className="button-group">
        <button onClick={startProcessing}>Start Processing</button>
        <button onClick={showSuccess}>Show Success</button>
        <button onClick={showError}>Show Error</button>
        <button onClick={resetStatus}>Reset</button>
      </div>
    </div>
  );
}

export default App;
