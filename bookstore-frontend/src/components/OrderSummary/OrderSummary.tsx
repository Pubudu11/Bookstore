import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

interface OrderSummaryProps {
    subtotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal }) => {
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate("/shipping", { state: { subtotal } });
    };

    return (
        <div className="order-summary-container">
            <h4>Order Summary</h4>
            <div className="d-flex">
                <span>Subtotal</span>
                <span>LKR {subtotal.toFixed(2)}</span>
            </div>
            <hr />
            <button className="btn" onClick={handleProceedToCheckout}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default OrderSummary;
