import React, { useState } from "react";
import "./UserLogin.css";
import Footer from "../Footer/Footer";

const UserLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("User");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "Logging in with username:",
      username,
      "password:",
      password,
      "role:",
      userRole
    );
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <h2>User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="user_name"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user-role">You are:</label>
            <select
              id="user-role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="User">User</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
        <a href="/">Back to Home</a>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
