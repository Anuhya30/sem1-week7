import React, { useRef, useState, useEffect } from "react";
import "./App.css";

// Image to lazy load
import sampleImage from "./assets/sample-image.jpg";

function LazyImage({ src, alt }) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lazy-image-container" ref={imgRef}>
      {isLoaded ? (
        <img src={src} alt={alt} className="lazy-image" />
      ) : (
        <div className="placeholder">Loading...</div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Lazy Load Images</h1>
      <p>Scroll down to load the image:</p>
      <div style={{ height: "300px" }}></div> {/* Simulate spacing */}
      <LazyImage src={sampleImage} alt="Sample" />
      <div style={{ height: "300px" }}></div> {/* Simulate spacing */}
    </div>
  );
}

export default App;
