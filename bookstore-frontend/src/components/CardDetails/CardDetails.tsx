import React, { useState } from "react";
import "./CardDetails.css";
import { useLocation } from "react-router-dom";

const CardDetails = () => {
    const location = useLocation();
    const { subtotal = "", shippingCost = "", total = "" } = location.state || {};

    const [formData, setFormData] = useState({
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const [errors, setErrors] = useState({
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const [selectedCard, setSelectedCard] = useState<string>("visa");

    const handleCardSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCard(event.target.value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" }); 
    };

    const validateForm = () => {
        const newErrors = {
            cardName: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
        };

        if (!/^[A-Za-z\s]+$/.test(formData.cardName)) {
            newErrors.cardName = "Name must contain only letters and spaces.";
        }

        if (!/^\d{16}$/.test(formData.cardNumber)) {
            newErrors.cardNumber = "Card number must be exactly 16 digits.";
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
            newErrors.expiryDate = "Expiry date must be in MM/YY format.";
        }

        
        if (!/^\d{3}$/.test(formData.cvv)) {
            newErrors.cvv = "CVV must be exactly 3 digits.";
        }

        setErrors(newErrors);
        return !newErrors.cardName && !newErrors.cardNumber && !newErrors.expiryDate && !newErrors.cvv;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Payment details submitted successfully!");
        }
    };

    return (
        <div className="card-details-container">
            <h5>Card Details</h5>
            <form onSubmit={handleSubmit}>
                {/* Card type selection (Visa / MasterCard) */}
                <div className="radio-group">
                    <div className="radio-item">
                        <input
                            type="radio"
                            id="visa"
                            name="cardType"
                            value="visa"
                            checked={selectedCard === "visa"}
                            onChange={handleCardSelection}
                        />
                        <label htmlFor="visa">
                            <img src="/images/visa.png" alt="Visa" className="card-img" />
                            Visa
                        </label>
                    </div>
                    <div className="radio-item">
                        <input
                            type="radio"
                            id="mastercard"
                            name="cardType"
                            value="mastercard"
                            checked={selectedCard === "mastercard"}
                            onChange={handleCardSelection}
                        />
                        <label htmlFor="mastercard">
                            <img src="/images/mastercard.png" alt="MasterCard" className="card-img" />
                            MasterCard
                        </label>
                    </div>
                </div>

                {/* Name on Card */}
                <div className="form-group">
                    <label htmlFor="cardName">Name on card</label>
                    <input
                        type="text"
                        id="cardName"
                        className={`form-control ${errors.cardName ? "is-invalid" : ""}`}
                        placeholder="Enter name"
                        value={formData.cardName}
                        onChange={handleChange}
                    />
                    {errors.cardName && <small className="error-text">{errors.cardName}</small>}
                </div>

                {/* Card Number */}
                <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    {errors.cardNumber && <small className="error-text">{errors.cardNumber}</small>}
                </div>

                {/* Expiry Date and CVV */}
                <div className="form-group">
                    <div className="d-flex justify-content-between">
                        <input
                            type="text"
                            id="expiryDate"
                            className={`form-control ${errors.expiryDate ? "is-invalid" : ""}`}
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleChange}
                        />
                        {errors.expiryDate && <small className="error-text">{errors.expiryDate}</small>}
                        <input
                            type="text"
                            id="cvv"
                            className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleChange}
                        />
                        {errors.cvv && <small className="error-text">{errors.cvv}</small>}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="mt-3 text-end">
                    <p>Subtotal: LKR {subtotal.toFixed(2)}</p>
                    <p>Shipping: LKR {shippingCost.toFixed(2)}</p>
                    <p><strong>Total (Incl. taxes): LKR {total.toFixed(2)}</strong></p>
                    <button type="submit" className="btn btn-primary w-100">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default CardDetails;
