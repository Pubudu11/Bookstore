import React, { useState } from "react";
import './CardDetails.css'; // Import the CSS

const CardDetails = () => {
    const [selectedCard, setSelectedCard] = useState<string>("visa");

    const handleCardSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCard(event.target.value);
    };

    return (
        <div className="card-details-container">
            <h5>Card Details</h5>
            <form>
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
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>

                {/* Card Number */}
                <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        className="form-control"
                        placeholder="0000 0000 0000 0000"
                    />
                </div>

                {/* Expiry Date and CVV */}
                <div className="form-group">
                    <div className="d-flex justify-content-between">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="CVV"
                        />
                    </div>
                </div>

                {/* Order Summary */}
                <div className="mt-3 text-end">
                    <p>Subtotal: $3000.00</p>
                    <p>Shipping: Rs.300.00</p>
                    <p><strong>Total (Incl. taxes): $3020.00</strong></p>
                    <button className="btn btn-primary w-100">Checkout</button>
                </div>
            </form>
        </div>
    );
};

export default CardDetails;
