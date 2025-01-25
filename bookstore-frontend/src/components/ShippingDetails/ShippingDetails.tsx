import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ShippingDetails.css";

const ShippingDetails: React.FC = () => {
    const location = useLocation();
    const subtotal = location.state?.subtotal || 0;

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        zipCode: "",
        contactNumber: "",
    });

    const [errors, setErrors] = useState({
        zipCode: "",
        contactNumber: "",
    });

    const shippingCost = 300;
    const total = subtotal + shippingCost;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;

        if (id === "zipCode" || id === "contactNumber") {
            if (!/^\d*$/.test(value)) return;
        }

        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" }); 
    };

    const validateForm = () => {
        const newErrors = {
            zipCode: "",
            contactNumber: "",
        };

        if (!/^\d{5}$/.test(formData.zipCode)) {
            newErrors.zipCode = "ZIP Code must be exactly 5 digits.";
        }

        if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Contact Number must be exactly 10 digits.";
        }

        setErrors(newErrors);
        return !newErrors.zipCode && !newErrors.contactNumber;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Shipping details submitted successfully!");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Shipping Address</label>
                        <textarea
                            id="address"
                            className="form-control"
                            placeholder="Enter your shipping address"
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                className="form-control"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipCode">Postal Code</label>
                            <input
                                type="text"
                                id="zipCode"
                                className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
                                placeholder="ZIP Code"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                            />
                            {errors.zipCode && (
                                <small className="error-text">{errors.zipCode}</small>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            className={`form-control ${errors.contactNumber ? "is-invalid" : ""}`}
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.contactNumber && (
                            <small className="error-text">{errors.contactNumber}</small>
                        )}
                    </div>
                        
                    
                <Link to="/"
                 state={{ total, subtotal, shippingCost }}
                >
                    <button type="submit" className="btn-primary">
                        Continue to Payment
                    </button>
                    </Link>
                </form>
            </div>

            <div className="order-summary-container">
                <h4>Order Summary</h4>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>LKR {subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping Cost</span>
                    <span>LKR {shippingCost.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>LKR {total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetails;
