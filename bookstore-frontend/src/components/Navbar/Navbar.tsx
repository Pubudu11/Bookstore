import "./Navbar.css"; // Assuming CSS file for styling

const Header = () => {
  return (
    <header className="header">
      {/* Main Content */}
      <div className="main-header">
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
          <a href="/login" className="nav-link">
            Sign Up / Login
          </a>
          <span className="currency">LKR</span>
          <div className="cart">
            <img src="cart-icon.png" alt="Cart" />
            <span className="cart-count">0</span>
          </div>
          <div className="wishlist">
            <img src="Wishlist.png" alt="wishList" />
            <span className="wishlist-count">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
