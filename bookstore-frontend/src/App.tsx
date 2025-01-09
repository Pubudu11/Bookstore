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
import UserLogin from "./components/Login/UserLogin";
import Register from "./components/Register/Register";
import BookList from "./components/BookList"; // Corrected import statement
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// Define the pages where the footer or navbar should not be displayed
const noFooterPages = ["/login", "/register"];
const noNavbarPages = ["/login", "/register"];

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app">
      {/* Conditionally render Navbar on pages except specified ones */}
      {!noNavbarPages.includes(location.pathname) && <Navbar />}

      <div className="main-content">
        <Routes>
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
          <Route path="/login" element={<UserLogin />} />
          {/* Register Page */}
          <Route path="/register" element={<Register />} />
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
