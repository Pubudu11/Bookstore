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
};

export default App;
