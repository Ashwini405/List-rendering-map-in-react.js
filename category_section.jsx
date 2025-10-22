import React from "react";
import "./CategorySection.css";

function Category() {
  const categories = [
    {
      name: "Fruits & Veges",
      icon: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
      color: "#3c7a34",
    },
    {
      name: "Breads & Sweets",
      icon: "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
      color: "#d18b17",
    },
    {
      name: "Drinks",
      icon: "https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png",
      color: "#f7a600",
    },
    {
      name: "Wine & Beverages",
      icon: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
      color: "#c83d3d",
    },
    {
      name: "Meat & Chicken",
      icon: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
      color: "#c85c1f",
    },
    {
      name: "Organic Items",
      icon: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
      color: "#5b8d3b",
    },
  ];

  return (
    <div className="category-container">
      {/* Header */}
      <div className="category-header">
        <h2>Category</h2>
        <div className="category-actions">
          <a href="#">View All Categories →</a>
          <div className="arrows">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="icon-wrapper" style={{ color: cat.color }}>
              <img src={cat.icon} alt={cat.name} />
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
