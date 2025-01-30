import React, { useState } from "react";
import axios from "axios";
import "./Pages.css";
import Footer from "../components/Footer";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!username || !password) {
      setMessage("All fields are required");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        password,
      });

      setMessage("Registration successful!");
      console.log("Registration successful", response.data);
    } catch (error) {
      setMessage(
        "Error: " + (error.response?.data || "Something went wrong. Please try again.")
      );
      console.error("Error during registration:", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Create an Account</h2>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" className="register-button" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
            {message && <p className="message">{message}</p>}
          </form>
          <p className="register-link">
            Already have an account? <a href="/Login">Login here</a>
          </p>
        </div>
      </div>

      {/* Footer outside the main container */}
      <Footer />
    </>
  );
}

export default Register;
