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
import "./App.css";
import BookList from "./components/BookList";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar only on the home page */}
      {location.pathname === "/" && <Navbar />}

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

      {/* Footer will appear on all pages */}
      <Footer />
    </>
  );
};

// Wrap the App component with Router to provide routing context
const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
