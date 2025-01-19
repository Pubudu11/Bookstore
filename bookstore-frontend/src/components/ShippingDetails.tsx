import React, { useState } from "react";
import "./ShippingDetails.css";

const ShippingDetails: React.FC = () => {
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

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear errors as user types
        setErrors({ ...errors, [id]: "" });
    };

    // Validate form fields
    const validateForm = () => {
        const newErrors = {
            zipCode: "",
            contactNumber: "",
        };

        // Validate ZIP Code (5 digits only)
        if (!/^\d{5}$/.test(formData.zipCode)) {
            newErrors.zipCode = "ZIP Code must be exactly digits.";
        }

        // Validate Contact Number (10 digits only)
        if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Contact Number must be exactly in digits.";
        }

        setErrors(newErrors);

        // Return whether the form is valid
        return !newErrors.zipCode && !newErrors.contactNumber;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Shipping details submitted successfully!");
            // Proceed to the next step, such as navigating to the payment page
        }
    };

    return (
        <div className="shipping-details-container">
            <h2>Shipping Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
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

                {/* Address Field */}
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

                {/* City and ZIP Code */}
                <div className="form-group d-flex">
                    <div>
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
                    <div>
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
                        {errors.zipCode && <small className="error-text">{errors.zipCode}</small>}
                    </div>
                </div>

                {/* Contact Number */}
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

                {/* Continue to Payment */}
                <button type="submit" className="btn btn-primary w-100">
                    Continue to Payment
                </button>
            </form>
        </div>
    );
};

export default ShippingDetails;
