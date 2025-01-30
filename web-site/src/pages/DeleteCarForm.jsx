import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Import styles

const DeleteCarForm = () => {
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState("");
  const [message, setMessage] = useState("");

  // Fetch all cars
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

  const handleCarSelect = (e) => {
    setSelectedCarId(e.target.value);
  };

  const handleDelete = async () => {
    if (!selectedCarId) {
      setMessage("Please select a car to delete.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this car? This action cannot be undone.")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/api/admin/cars/${selectedCarId}`);
      setMessage("Car deleted successfully!");
      setCars(cars.filter(car => car.id !== parseInt(selectedCarId)));
      setSelectedCarId("");
    } catch (error) {
      console.error("Error deleting car:", error.response?.data || error.message);
      setMessage("Failed to delete the car. Please try again.");
    }
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/Dashboard">Dashboard</a></li>
          <li><a href="/CarForm">Add Car</a></li>
          <li><a href="/UpdateCarForm">Manage Cars</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="delete-car-form-container">
          <h1>Delete Car Model</h1>
          <div className="delete-form-group">
            <label htmlFor="carId">Select Car to Delete</label>
            <select id="carId" value={selectedCarId} onChange={handleCarSelect} required>
              <option value="">Select a car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
          <button onClick={handleDelete} className="delete-button">Delete Car</button>
          {message && <p className="delete-form-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default DeleteCarForm;
