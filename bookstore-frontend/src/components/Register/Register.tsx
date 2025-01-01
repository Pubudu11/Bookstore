import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Mock registration logic (Replace with an API call)
    console.log("Registration successful:", formData);

    alert("Registration successful!");
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full_name">Full_Name:</label>
          <input
            type="text"
            name="full_name"
            placeholder="Full_Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="confirm_password">confirm_password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <Link to="/" className="link">
          Back to Home
        </Link>
        <Link to="/login" className="link">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
