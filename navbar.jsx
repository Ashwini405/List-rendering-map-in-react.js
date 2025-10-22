import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FoodMart</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Shop</li>
        <li>Brands</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-cart">Cart (0)</div>
    </nav>
  );
};

export default Navbar;
