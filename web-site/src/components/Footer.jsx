import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section contact">
        <h2 className="footer-title">VEGA INNOVATIONS</h2>
        <ul>
          <li>+94 11 5551 551</li>
          <li>Online@vega.com</li>
          <li>Expert City, Colombo 10, Sri Lanka.</li>
        </ul>
        
      </div>
      <div className="social-icons">
        <h3>Our Socials</h3><ul>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a></ul>
        </div>
      <div className="footer-section">
        <h3>Information</h3>
        <ul>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/Contact">Contacts</a></li>
          <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
          <li><a href="/UpdateCarForm">UpdateCarForm</a></li>
          <li><a href="/DeleteCarForm">DeleteCarForm</a></li>
        </ul>
      </div>
      
      <div className="footer-section newsletter">
        <h3>Keep in Touch</h3>
        <p>Get E-mail updates about our latest info.</p>
        <form>
          <input type="email" placeholder="Enter Your Mail" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 All rights reserved | Thushantha Nipuna</p>
      </div>
    </footer>
  );
}

export default Footer;
