import React from "react";
import "./Pages.css";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-policy-wrapper">
        {/* Header Section */}
        <header className="privacy-policy-header">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-subheading">
            Your privacy is important to us at VEGA Cars.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="privacy-policy-section privacy-policy-intro">
          <h2 className="privacy-policy-section-title">Introduction</h2>
          <p className="privacy-policy-text">
            At VEGA Cars, we are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, and safeguard your data when you interact with
            our website or services.
          </p>
        </section>

        {/* Data Collection Section */}
        <section className="privacy-policy-section privacy-policy-data-collection">
          <h2 className="privacy-policy-section-title">What Information We Collect</h2>
          <ul className="privacy-policy-list">
            <li>
              <strong>Personal Information:</strong> Name, email address,
              contact details, and payment information.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              operating system, and device identifiers.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on our
              site, and interaction with features.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="privacy-policy-section privacy-policy-usage">
          <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
          <p className="privacy-policy-text">
            The information we collect is used to:
          </p>
          <ul className="privacy-policy-list">
            <li>Provide and improve our services.</li>
            <li>Process your transactions securely.</li>
            <li>
              Communicate updates, promotions, and other relevant information.
            </li>
            <li>
              Analyze website performance and improve user experience.
            </li>
          </ul>
        </section>

        {/* Sharing and Disclosure */}
        <section className="privacy-policy-section privacy-policy-sharing">
          <h2 className="privacy-policy-section-title">Sharing Your Information</h2>
          <p className="privacy-policy-text">
            We do not sell your personal information. However, we may share
            your data with:
          </p>
          <ul className="privacy-policy-list">
            <li>
              Trusted third-party vendors who assist in providing our services
              (e.g., payment processors).
            </li>
            <li>
              Law enforcement or government agencies, if required by law.
            </li>
          </ul>
        </section>

        {/* Cookies Section */}
        <section className="privacy-policy-section privacy-policy-cookies">
          <h2 className="privacy-policy-section-title">Cookies and Tracking</h2>
          <p className="privacy-policy-text">
            Our website uses cookies to enhance your browsing experience. You
            can control cookie preferences in your browser settings. Disabling
            cookies may affect certain functionalities of the website.
          </p>
        </section>

        {/* User Rights Section */}
        <section className="privacy-policy-section privacy-policy-rights">
          <h2 className="privacy-policy-section-title">Your Rights</h2>
          <p className="privacy-policy-text">
            As a user, you have the right to:
          </p>
          <ul className="privacy-policy-list">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to inaccurate or incomplete data.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        {/* Updates Section */}
        <section className="privacy-policy-section privacy-policy-updates">
          <h2 className="privacy-policy-section-title">Policy Updates</h2>
          <p className="privacy-policy-text">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page, and the updated date will be
            displayed at the top of the policy.
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
