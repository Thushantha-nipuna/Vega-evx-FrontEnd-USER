import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Import styles

const UpdateCarForm = () => {
  const [carId, setCarId] = useState("");
  const [carData, setCarData] = useState({
    name: "",
    features: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all car models
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/admin/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  // Handle car selection
  const handleCarSelect = async (e) => {
    const selectedCarId = e.target.value;
    setCarId(selectedCarId);

    if (selectedCarId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/admin/cars/${selectedCarId}`);
        setCarData({
          name: response.data.name,
          features: response.data.features,
          price: response.data.price,
        });
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    } else {
      setCarData({ name: "", features: "", price: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!carId || !carData.name || !carData.features || !carData.price) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", carData.name);
    formData.append("features", carData.features);
    formData.append("price", carData.price);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:8080/api/admin/cars/${carId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Car model updated successfully!");
      setCarData({ name: "", features: "", price: "" });
      setCarId("");
      setImage(null);
    } catch (error) {
      console.error("Error updating car model:", error.response?.data || error.message);
      setMessage("Failed to update car model.");
    }
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/Dashboard">Dashboard</a></li>
          <li><a href="/CarForm">Add Car</a></li>
          <li><a href="/UpdateCarForm">Update Car Models</a></li>
          <li><a href="/DeleteCarForm">Delete Car Models</a></li>
          <li><a href="/AdminOrders">Orders</a></li>
          <li><a href="/Home">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="update-car-form-container">
          <h1>Update Car Model</h1>
          <form onSubmit={handleSubmit} className="update-car-form">
            <div className="update-form-group">
              <label htmlFor="carId">Select Car</label>
              <select id="carId" value={carId} onChange={handleCarSelect} required>
                <option value="">Select a car</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="update-form-group">
              <label htmlFor="name">Car Name</label>
              <input type="text" id="name" name="name" value={carData.name} onChange={handleInputChange} required />
            </div>

            <div className="update-form-group">
              <label htmlFor="features">Features</label>
              <textarea id="features" name="features" value={carData.features} onChange={handleInputChange} required />
            </div>

            <div className="update-form-group">
              <label htmlFor="price">Price (USD)</label>
              <input type="number" id="price" name="price" value={carData.price} onChange={handleInputChange} required />
            </div>

            <div className="update-form-group">
              <label htmlFor="image">Upload New Image (Optional)</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            </div>

            <button type="submit" className="update-submit-button">Update Car</button>
          </form>

          {message && <div className="update-form-message">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default UpdateCarForm;
