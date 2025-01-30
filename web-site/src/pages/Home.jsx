import { useState, useEffect } from "react";
import "../App.css";
import "./Pages.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    mobileNumber: "",
    nicNumber: "",
    address: "",
    carModel: "",
  });
  const [price, setPrice] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/cars');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    
    fetchCars();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "carModel") {
      const selectedCar = cars.find((car) => car.name === value);
      setPrice(selectedCar?.price || 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customerName: formData.customerName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      carModel: formData.carModel,
      price: price,
      orderDate: new Date().toISOString(),
      orderStatus: "Pending",
      address: formData.address,
      nicNumber: formData.nicNumber
    };

    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log("Order successfully submitted:", data);
      alert("Order submitted successfully!");
      
      setFormData({
        customerName: "",
        email: "",
        mobileNumber: "",
        nicNumber: "",
        address: "",
        carModel: "",
      });
      setPrice(0);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order. Please try again.");
    }
  };

  return (
    <>
      <div className="page-container">
        <div className="video-container">
          <video
            src="/videos/1201.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="full-width-video"
          />
        </div>
      </div>

      <div className="content-container">
        <div className="img">
          <img
            src="/images/w5.jpg"
            alt="Background"
            className="darkened-image"
          />
          <div className="img-overlay">
            <p className="img-text">
              Fully electric, two-seater supercar, in a handmade carbon fiber
              body powered by a dual motor all-wheel-drive drivetrain. All
              automotive electronics, including the liquid-cooled motor
              controllers and Li-ion battery pack, are designed and manufactured
              in-house, showcasing some of the most advanced technologies in the
              EV supercar space.
            </p>
          </div>
          <div className="btn">
            <button>
              <Link to="/models">Discover Models</Link>
            </button>
          </div>

          <div className="form-card">
            <h1 className="form-title">Order Your Car</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="nicNumber"
                  value={formData.nicNumber}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="National ID"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input"
                  rows="3"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">-- Select Car Model --</option>
                  {cars.map((car) => (
                    <option key={car.id} value={car.name}>
                      {car.name} - Features: {car.features} - ${Number(car.price).toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              {formData.carModel && (
                <p>
                  <strong>Price:</strong> ${price.toLocaleString()}
                </p>
              )}
              <button type="submit" className="form-button">
                Submit Order
              </button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;