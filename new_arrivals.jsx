import React from "react";
import "./New.css";

function App() {
  const brands = [
    {
      name: "Amber Jar",
      desc: "Honey best nectar you wish to get",
      img: "https://food-mart-template.vercel.app/images/product-thumb-11.jpg",
    },
    {
      name: "Amber Jar",
      desc: "Honey best nectar you wish to get",
      img: "https://food-mart-template.vercel.app/images/product-thumb-12.jpg",
    },
    {
      name: "Amber Jar",
      desc: "Honey best nectar you wish to get",
      img: "https://food-mart-template.vercel.app/images/product-thumb-13.jpg",
    },
    {
      name: "Amber Jar",
      desc: "Honey best nectar you wish to get",
      img: "https://food-mart-template.vercel.app/images/product-thumb-14.jpg",
    },
  ];

  return (
    <div className="brand-container">
      {/* Header */}
      <div className="brand-header">
        <h2>Newly Arrived Brands</h2>
        <div className="brand-actions">
          <a href="#">View All Categories →</a>
          <div className="arrows">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>

      {/* Brand Cards */}
      <div className="brand-grid">
        {brands.map((item, index) => (
          <div key={index} className="brand-card">
            <div className="brand-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{item.name}</span>
              <p className="brand-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
