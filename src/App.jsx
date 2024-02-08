import React, { useState, createContext } from "react";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <NavBar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
