import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import "./loginPage.style.css";

const creds = {
  username: "geek",
  password: "1234",
};

const LoginPage = ({ onClose }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me checkbox
  const { setIsAuthenticated } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.username === creds.username && user.password === creds.password) {
      setIsAuthenticated(true);
      if (rememberMe) {
        // Implement logic to remember user
      }
      onClose(); // Close login page after successful login
    } else {
      alert("Try again!");
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onInputChange}
        />
        <div className="remember-me-label">
          <input
            type="checkbox"
            className="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <span className="remember-text">Remember Me</span>
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
