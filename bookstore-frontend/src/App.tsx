import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slideshow from "./components/SlideShow/SlideShow";
import UserLogin from "./components/Login/UserLogin";
import Register from "./components/Register/Register";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar will appear on all pages */}
        <Navbar />

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="body-background">
                  <Slideshow />
                </div>
              }
            />
            {/* Login Page */}
            <Route path="/login" element={<UserLogin />} />
            {/* Register Page */}
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Footer will appear on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
