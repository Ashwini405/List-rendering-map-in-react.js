import React from "react";
import "./Trends.css";

function Trends() {
  const products = [
    {
      id: 1,
      name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      unit: "1 UNIT",
      rating: 4.5,
      discount: "-30%",
      img: "https://food-mart-template.vercel.app/images/thumb-bananas.png",
    },
    {
      id: 2,
      name: "Crunchy Cookies",
      price: 18.0,
      unit: "1 UNIT",
      rating: 4.5,
      discount: "-30%",
      img: "https://food-mart-template.vercel.app/images/thumb-biscuits.png",
    },
    {
      id: 3,
      name: "Cucumber Fresh",
      price: 18.0,
      unit: "1 UNIT",
      rating: 4.5,
      discount: "",
      img: "https://food-mart-template.vercel.app/images/thumb-cucumber.png",
    },
    {
      id: 4,
      name: "Fresh Milk Carton",
      price: 18.0,
      unit: "1 UNIT",
      rating: 4.5,
      discount: "",
      img: "https://food-mart-template.vercel.app/images/thumb-milk.png",
    },
    {
      id: 5,
      name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      unit: "1 UNIT",
      rating: 4.5,
      discount: "-30%",
      img: "https://food-mart-template.vercel.app/images/thumb-bananas.png",
    },
  ];

  return (
    <div className="product-section">
      {/* Header */}
      <div className="product-header">
        <h2>Trending Products</h2>
        <div className="product-categories">
          <span className="active">ALL</span>
          <span>FRUITS & VEGES</span>
          <span>JUICES</span>
        </div>
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            {item.discount && <span className="discount">{item.discount}</span>}
            <button className="wishlist">♡</button>

            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="unit">
                {item.unit} <span className="star">⭐</span> {item.rating}
              </p>
              <h4>${item.price.toFixed(2)}</h4>
            </div>

            <div className="product-actions">
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trends;
