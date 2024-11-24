import React, { useState } from "react";
import "./app.css";

function App() {
  // State to track form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form Submitted:", formData); // Log the form data to the console
  };

  return (
    <div className="app-container">
      <h1>Submit Form Example</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
