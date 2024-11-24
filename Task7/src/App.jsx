import React from "react";
import "./app.css";

function App() {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  const greetingClass =
    currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";

  return (
    <div className={`app-container ${greetingClass}`}>
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
}

export default App;
