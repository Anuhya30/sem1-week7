import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer state
  const timerRef = useRef(null); // Ref to store the timer ID

  // Start the stopwatch
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Stop the stopwatch
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  // Reset the stopwatch
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  // Format time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="app">
      <h1>Stopwatch</h1>
      <div className="timer-display">{formatTime(time)}</div>
      <div className="button-container">
        <button onClick={startTimer} className="button start">
          Start
        </button>
        <button onClick={stopTimer} className="button stop">
          Stop
        </button>
        <button onClick={resetTimer} className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
