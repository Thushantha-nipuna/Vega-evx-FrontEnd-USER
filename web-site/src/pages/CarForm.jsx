import React, { useState } from "react";
import axios from "axios";
import "./admin.css"; // Import the updated CSS

const CarForm = () => {
  const [carData, setCarData] = useState({
    name: "",
    features: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    if (!carData.name || !carData.features || !carData.price || !image) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", carData.name);
    formData.append("features", carData.features);
    formData.append("price", carData.price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/cars",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage("Car model added successfully!");
      console.log(response.data);
      setCarData({ name: "", features: "", price: "" });
      setImage(null);
    } catch (error) {
      console.error("Error adding car model:", error.response?.data || error.message);
      setMessage("Failed to add car model. Please try again.");
    }
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/Dashboard">Dashboard</a></li>
          <li><a href="/UpdateCarForm">Manage Cars</a></li>
          <li><a href="/AdminOrders">Orders</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="car-form-container">
          <h1>Add Car Model</h1>
          <form onSubmit={handleSubmit} className="car-form">
            <div className="form-group">
              <label htmlFor="name">Car Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={carData.name}
                onChange={handleInputChange}
                placeholder="Enter car name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="features">Features</label>
              <textarea
                id="features"
                name="features"
                value={carData.features}
                onChange={handleInputChange}
                placeholder="Enter car features"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price (USD)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={carData.price}
                onChange={handleInputChange}
                placeholder="Enter car price"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Car Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Add Car Model
            </button>
          </form>

          {message && <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default CarForm;
