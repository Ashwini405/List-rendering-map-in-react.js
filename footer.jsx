import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>FoodMart</h2>
          <p>Fresh groceries and organic food delivered to your home.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h3>Categories</h3>
          <ul>
            <li>Fruits & Veggies</li>
            <li>Dairy Products</li>
            <li>Snacks</li>
            <li>Beverages</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 FoodMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
