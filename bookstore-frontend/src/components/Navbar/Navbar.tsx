import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="top-bar">
        <p className="contact">
          ---Call us for Web Orders: +94 765252133 / 0111234567---
        </p>
        <p className="email">
          Email: <a href="mailto:bookhaven.lk">bookhaven.lk</a>
        </p>
      </div>

      {/* Main Content */}
      <div className="main-header">
        <div className="logo-section">
          <img src="logo.JPG" alt="Book Haven Logo" className="logo" />
          <h1 className="site-name">Book Haven</h1>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search Books"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>

        <div className="nav-section">
          <Link to="/advanced-search" className="nav-link">
            Advanced Search
          </Link>
          <Link to="/login" className="nav-link">
            Sign Up / Login
          </Link>
          <span className="currency">LKR</span>
          <div className="cart">
            <img src="cart-icon.png" alt="Cart" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
