import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  // Handlers for button actions
  const handleAdd = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleEdit = () => {
    if (items.length === 0) return;
    const updatedItems = [...items];
    updatedItems[updatedItems.length - 1] += " (Edited)";
    setItems(updatedItems);
  };

  const handleDelete = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };

  return (
    <div className="app">
      <h1>Dynamic Button Actions</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="button-group">
        <button className="btn add" onClick={handleAdd}>
          Add
        </button>
        <button className="btn edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
