// OrderSummary.tsx
import React from "react";

interface OrderSummaryProps {
    subtotal: number;
    shippingCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shippingCost }) => {
    const total = subtotal + shippingCost;

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#f8f9fa",
            }}
        >
            <h4>Order Summary</h4>
            <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
            </div>
        </div>
    );
};

export default OrderSummary;
