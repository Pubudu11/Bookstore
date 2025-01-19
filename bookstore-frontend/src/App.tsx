<<<<<<< HEAD
// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart"; // Import the ShoppingCart component
import CardDetails from "./components/CardDetails"; // Import the CardDetails component
import Navbar from "./components/Navbar"; // Import the Navbar component

const App: React.FC = () => {
    return (
        <Router>
            {/* Add Navbar to the top of the page */}
            <Navbar />

            {/* Define Routes */}
            <Routes>
                {/* Home route: ShoppingCart */}
                <Route path="/" element={<ShoppingCart />} />

                {/* Payment route: CardDetails */}
                <Route path="/payment" element={<CardDetails />} />
            </Routes>
        </Router>
    );
=======

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
>>>>>>> 32d520c34c51ce316d8c3ba58769759632cac19c
};

// Wrap the App component with Router to provide routing context
const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

