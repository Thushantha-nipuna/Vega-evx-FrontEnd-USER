/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Pages.css";
import Footer from "../components/Footer";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    mobileNumber: "",
    nicNumber: "",
    address: "",
    carModel: "",
  });

  const [cars, setCars] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch session data (Check if user is logged in)
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/current-user", { withCredentials: true })
      .then(response => {
        if (response.data) {
          setUser(response.data);
          setFormData(prev => ({
            ...prev,
            customerName: response.data.username || "", 
            email: response.data.email || ""
          }));
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  // Fetch car models
  useEffect(() => {
    axios.get("http://localhost:8080/api/admin/cars")
      .then(response => setCars(response.data))
      .catch(error => console.error("Error fetching cars:", error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before submitting
    if (!formData.customerName || !formData.email || !formData.mobileNumber || !formData.nicNumber || !formData.address || !formData.carModel) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/orders", formData, { withCredentials: true });
      alert("Order Submitted Successfully!");
      console.log("Order Response:", response.data);
      navigate("/order-success"); // Redirect to success page (adjust as needed)
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <>
      <div className="form-card">
        <h1 className="form-title">{user ? `Hello, ${user.username}` : "Order Your Car"}</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="customerName" value={formData.customerName} className="form-input" placeholder="Full Name" required readOnly />
          </div>
          <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="form-input" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="text" name="nicNumber" value={formData.nicNumber} onChange={handleChange} className="form-input" placeholder="National ID" required />
          </div>
          <div className="form-group">
            <textarea name="address" value={formData.address} onChange={handleChange} className="form-input" rows="3" placeholder="Address" required />
          </div>
          <div className="form-group">
            <select name="carModel" value={formData.carModel} onChange={handleChange} className="form-input" required>
              <option value="">-- Select Car Model --</option>
              {cars.map(car => (
                <option key={car.id} value={car.name}>
                  {car.name} - Features: {car.features} - ${Number(car.price).toLocaleString()}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="form-button">Submit Order</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default OrderPage;*/
