import React from "react";
import "./App.css";

const App = () => {
  const data = [
    {
      category: "Fruits",
      items: ["Apple", "PineApple", "Watermelon"],
    },
    {
      category: "Vegetables",
      items: ["Carrot", "Beans", "Potato"],
    },
    {
      category: "Dairy",
      items: ["Milk", "Ghee", "Yogurt"],
    },
  ];

  return (
    <div className="app">
      <h1 className="header">Categories and Items</h1>
      <ul className="category-list">
        {data.map((category, index) => (
          <li key={index} className="category">
            <h2 className="category-title">{category.category}</h2>
            <ul className="item-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

