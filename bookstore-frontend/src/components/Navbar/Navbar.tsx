import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
    const mockUsername = "JohnDoe";
    setUsername(mockUsername);
    localStorage.setItem("username", mockUsername);
  };

  const handleLogout = () => {
    setUsername(null);
    localStorage.removeItem("username");
    navigate("/");
  };
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Main Content */}
      <div className="main-header">
        {/* Logo Section */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src="logo.png" alt="Book Haven Logo" className="logo" />
          </a>
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
          <a href="/advanced-search" className="nav-link">
            Advanced Search
          </a>

          {!username ? (
            <button className="nav-link login-button" onClick={handleLogin}>
              Sign Up / Login
            </button>
          ) : (
            <div className="profile-container">
              <div
                className="profile-section d-flex align-items-center"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="profile.jpeg"
                  alt="Profile Icon"
                  className="profile-icon"
                />
                <span className="username">Hi, {username}</span>
              </div>
              <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <button
                  className="dropdown-item"
                  onClick={() => navigate("/profile")}
                >
                  View Profile
                </button>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          )}

          <a href="/shopping-cart">
            <div className="cart">
              <img src="cart-icon.png" alt="Cart" />
              <span className="cart-count">0</span>
            </div>
          </a>

          <div className="wishlist">
            <img src="Wishlist.png" alt="Wishlist" />
            <span className="wishlist-count">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
