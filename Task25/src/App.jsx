import React, { useRef } from "react";
import "./App.css";

function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Scroll to Section Example</h1>
        <button onClick={scrollToSection} className="scroll-button">
          Scroll to Section
        </button>
      </header>

      <div className="content">
        <p>Scroll down or click the button to go to the target section.</p>
      </div>

      <div ref={sectionRef} className="target-section">
        <h2>Target Section</h2>
        <p>You have successfully scrolled to this section!</p>
      </div>
    </div>
  );
}

export default App;
