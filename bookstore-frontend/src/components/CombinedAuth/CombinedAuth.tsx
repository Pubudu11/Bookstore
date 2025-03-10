import React, { useState } from "react";
import "./CombinedAuth.css";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../api/auth.ts";
import { RegisterRequest, LoginCredentials } from "../../types";
import { toast } from "react-toastify";

const CombinedAuth: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  // Login states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Register states
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabChange = (tab: "login" | "register") => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginData: LoginCredentials = {
      username,
      password,
    };
    try {
      await authAPI.login(loginData);
      toast.success("Login successful");
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`${error.response.status} ${error.response.data.message}`);
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      const registerData: RegisterRequest = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      try {
        await authAPI.register(registerData);
        toast.success("Registration successful");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }); // Clear form data
        handleTabChange("login");
      } catch (error: any) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(
            `${error.response.status} ${error.response.data.message}`
          );
        } else {
          toast.error("Network error. Please check your connection.");
        }
      }
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
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => handleTabChange("register")}
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
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter User name"
                value={formData.username}
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
