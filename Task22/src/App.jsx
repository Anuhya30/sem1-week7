import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Update the ref value to the previous count on each render
  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div className="app">
      <h1>Counter with Previous Value</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <div>
        <button onClick={() => setCount(count + 1)} className="button">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="button">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
