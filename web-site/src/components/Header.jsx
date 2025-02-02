import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/current-user", { withCredentials: true })
      .then(response => {
        setUser(response.data); 
      })
      .catch(() => {
        setUser(null); 
      });
  }, []); 

  // Handle logout
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null); 
        localStorage.removeItem("user"); 
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">VEGA INNOVATIONS</Link>
      </h1>
      <nav className="nav">
        <Link to="/Models">Models</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/AboutUs">About us</Link>

        {/* Conditional Rendering for Login/Logout */}
        {user ? (
          <button className="nav-user" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
