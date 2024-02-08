import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import LoginPage from "../loginPage/LoginPage";
import "./navBar.style.css";

const NavBar = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          {!isAuthenticated ? (
            <li>
              <button onClick={toggleLoginPage}>Login</button>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {showLoginPage && <LoginPage onClose={toggleLoginPage} />}
    </div>
  );
};

export default NavBar;
