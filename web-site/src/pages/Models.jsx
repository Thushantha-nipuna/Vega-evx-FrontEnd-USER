import React, { useState, useEffect } from "react";
import "./Pages.css";
import Footer from "../components/Footer";

function Models() {
  const [models, setModels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch car models from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/admin/cars")

      .then((response) => response.json())
      .then((data) => setModels(data))
      .catch((error) => console.error("Error fetching car models:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [models.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {models.map((model, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            key={model.id}
          >
            {/* Render the car image */}
            <img
              src={`http://localhost:8080${model.image}`} // Adjusted to match the correct backend property
              alt={model.name} // Display the car name properly
              style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
            {/* Display model name */}
            <h2>{model.name}</h2> 
            {/* Display car price */}
            <p>Price: ${model.price?.toLocaleString()}</p> 
            {/* Show car features */}
            <p>Features: {model.features}</p>  {/* Add features */}
            <button className="customize-btn">Order</button>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&#8592; Prev</button>
        <button onClick={handleNext}>Next &#8594;</button>
      </div>

      <Footer />
    </div>
  );
}

export default Models;
