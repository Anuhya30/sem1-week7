import React from "react";
import "./App.css";
import backgroundImage from "./assets/background.jpg"; 

function App() {
  return (
    <div className="app">
      <h1>Background Image Example</h1>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
        }}
      >
        This is a div with a background image!
      </div>
    </div>
  );
}

export default App;
