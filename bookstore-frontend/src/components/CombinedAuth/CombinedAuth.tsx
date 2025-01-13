import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CombinedAuth.css";
import { Link } from "react-router-dom";

const CombinedAuth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Register states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logging in with:", { username, password });
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Registering with:", formData);
    }
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="auth-container">
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      <div className="form-content">
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="login-form">
            <h2 className="auth-title">Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="register-form">
            <h2 className="auth-title">Register</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
      {/* Link to Home Page */}
      <Link to="/" className="auth-home-link">
        Back to Home Page
      </Link>
    </div>
  );
};

export default CombinedAuth;
