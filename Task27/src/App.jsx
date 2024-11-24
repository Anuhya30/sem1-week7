import React from "react";
import "./App.css";

// Import images
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

function App() {
  // Array of image paths
  const images = [image1, image2, image3];

  return (
    <div className="app">
      <h1>Dynamic Image Rendering</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
