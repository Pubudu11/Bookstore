import React from "react";
import { useNavigate } from "react-router-dom";

interface OrderSummaryProps {
    subtotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal }) => {
    const total = subtotal;
    const navigate = useNavigate(); // Hook for navigation

    const handleProceedToCheckout = () => {
        navigate("/shipping"); // Navigate to the Shipping Details page
    };

    return (
        <div className="order-summary-container">
            <h4>Price Details</h4><br></br>
            <div className="d-flex">
                <span>Subtotal</span>
                <span>LKR {subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex">
                <span>Total</span>
                <span>LKR {total.toFixed(2)}</span>
            </div>
            <hr />
            <button className="btn" onClick={handleProceedToCheckout}>
                Proceed to Checkouts
            </button>
        </div>
    );
};

export default OrderSummary;
