import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import CardDetails from "./components/CardDetails";
import ShippingDetails from "./components/ShippingDetails"; // Import the ShippingDetails component
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/shipping" element={<ShippingDetails />} /> {/* Shipping Page Route */}
        <Route path="/payment" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
