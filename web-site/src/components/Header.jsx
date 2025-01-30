import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Header.css";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch current user when the component loads or when user state is updated (like after logout)
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/current-user", { withCredentials: true })
      .then(response => {
        setUser(response.data); // If logged in, set user state
      })
      .catch(() => {
        setUser(null); // If no user, set user state to null
      });
  }, []); // Empty dependency array ensures this runs once on page load

  // Handle logout
  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null); // Clear user state on logout
        localStorage.removeItem("user"); // Remove any localStorage session data
        navigate("/"); // Redirect to homepage or login page after logout
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
        <Link to="/dealer">Dealerships</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/OrderPage">Order</Link>

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
