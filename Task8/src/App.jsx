import React, { useState } from "react";
import "./app.css";

function App() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login state
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <h1 className="status-message">
        {isLoggedIn ? "Welcome Back!" : "Please Log In"}
      </h1>
      <button className="auth-button" onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
