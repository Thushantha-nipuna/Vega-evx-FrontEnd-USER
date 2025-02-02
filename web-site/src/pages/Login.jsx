import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function Login() {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check for admin credentials
    if (username === "adminVega" && password === "adminVega123") {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/Dashboard"); 
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      const userData = response.data;
      console.log("Login successful", userData);

      if (!userData) {
        throw new Error("Invalid login");
      }

      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/Models"); 
      
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/Register">Create new</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
