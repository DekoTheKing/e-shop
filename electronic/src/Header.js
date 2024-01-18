// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <div className="header"> {/* Add a div wrapper */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <h1>Welcome to our Electronic Store</h1>
    </div>
  );
}

export default Header;
