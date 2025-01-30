import React from "react";
import "./Pages.css";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      {/* Main Content */}
      <div className="aboutus-container">
        <header className="aboutus-header">
          <h1 className="aboutus-title">About VEGA Cars</h1>
          <p className="aboutus-subheading">
            Driving the future of innovation, performance, and sustainability.
          </p>
        </header>

        <section className="aboutus-content">
          <div className="aboutus-image-container">
            <img
              src="/images/vega-car.jpg"
              alt="VEGA Cars"
              className="aboutus-image"
            />
          </div>
          <div className="aboutus-text-container">
            <h2 className="aboutus-section-title">Our Vision</h2>
            <p className="aboutus-paragraph">
              At VEGA Cars, we are dedicated to revolutionizing the automotive
              industry by delivering cutting-edge electric vehicles that merge
              sustainability with superior performance. Our commitment to
              excellence drives us to create vehicles that embody innovation,
              style, and eco-friendliness.
            </p>
            <h2 className="aboutus-section-title">Why Choose VEGA?</h2>
            <p className="about-para">
              State-of-the-art electric technology. Exceptional design with
              premium features. Commitment to sustainability and a greener
              planet. Unparalleled customer support and reliability.
            </p>
          </div>
        </section>

        <section className="aboutus-values">
          <h2 className="aboutus-values-title">Our Values</h2>
          <div className="aboutus-value-boxes">
            <div className="aboutus-value-box">
              <h3 className="aboutus-value-heading">Innovation</h3>
              <p className="aboutus-value-paragraph">
                We believe in constantly pushing the boundaries of engineering,
                design, and technology.
              </p>
            </div>
            <div className="aboutus-value-box">
              <h3 className="aboutus-value-heading">Sustainability</h3>
              <p className="aboutus-value-paragraph">
                Creating a cleaner, greener future with every vehicle we
                produce.
              </p>
            </div>
            <div className="aboutus-value-box">
              <h3 className="aboutus-value-heading">Excellence</h3>
              <p className="aboutus-value-paragraph">
                Delivering exceptional quality and performance in every detail.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Outside the Main Div */}
      <Footer />
    </>
  );
};

export default AboutUs;
