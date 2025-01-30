import React, { useState, useEffect } from "react";
import "./Pages.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            <a href="/">Home</a> &gt; Contact
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          {/* Contact Information */}
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Your Passion is Our Satisfaction</p>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>
                <strong>Address:</strong> Expert City, Colombo 10, Sri Lanka.
              </p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>
                <strong>Phone:</strong> +94 11 5551 551
              </p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>
                <strong>Email:</strong> Online@vega.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h4>Leave a Message</h4>
            <p>Our staff will respond shortly.</p>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
