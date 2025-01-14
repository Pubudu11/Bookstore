
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";

import BookList from "./components/BookList/BookList"; // Ensure this path is correct
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CombinedAuth from "./components/CombinedAuth/CombinedAuth";

// Define the pages where the footer or navbar should not be displayed
const noFooterPages = ["/login", "/register"];
const noNavbarPages = ["/login", "/register"];

const App: React.FC = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="app">
      {/* Conditionally render Navbar on pages except specified ones */}
      {!noNavbarPages.includes(location.pathname) && <Navbar />}

      <div className="main-content">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="body-background">
                <Slideshow />
                <BookList />
              </div>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<CombinedAuth />} />

          {/* Register Page */}
          <Route path="/register" element={<CombinedAuth />} />
        </Routes>
      </div>

      {/* Conditionally render Footer on pages except specified ones */}
      {!noFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
};

// Wrap the App component with Router to provide routing context
const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

