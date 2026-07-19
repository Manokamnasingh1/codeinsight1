import React from "react";
import "./Home.css";
import laptopImage from "../assets/laptop.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Hero Content */}
        <div className="hero-text">

          <span className="hero-badge">
            ⚡ We Build Digital Success
          </span>

          <h1>
  Complete Web & App
  <br />
  Solutions for Your
  <br />
  <span>Business</span>
</h1>

          <p>
            We design and develop websites, mobile apps, custom software, UI/UX, and digital solutions that help businesses grow, automate operations, and succeed online.
          </p>

          <div className="hero-buttons">
            <a href="#request" className="primary-btn">
              Get Free Quote →
            </a>

            <a href="#services" className="secondary-btn">
              View Services
            </a>
          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src={laptopImage}
            alt="Website Development"
          />
        </div>

      </div>

      {/* Why Choose Us */}

      <div className="why-section">

        <p className="why-title">
          WHY CHOOSE US
        </p>

        <h2>
          We Deliver More Than
          <br />
          <span>Just Code</span>
        </h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">💻</div>
            <h4>Modern Design</h4>
          </div>

          <div className="why-card">
            <div className="icon">🚀</div>
            <h4>Fast Delivery</h4>
          </div>

          <div className="why-card">
            <div className="icon">₹</div>
            <h4>Affordable Pricing</h4>
          </div>

          <div className="why-card">
            <div className="icon">🎧</div>
            <h4>Client Support</h4>
          </div>

        </div>

      </div>

    </section>
  );
}
