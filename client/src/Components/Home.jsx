import React from "react";
import "./Home.css";
import laptopImage from "../assets/laptop.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        {/* Left Content */}
        <div className="hero-text">

          <span className="hero-badge">
            🚀 Trusted Web Development Partner
          </span>

          <h1>
            Professional Websites <br />
            That Help Your Business Grow
          </h1>

          <p>
            At <strong>CodeInsight</strong>, we design and develop modern,
            responsive, and high-performing websites that help businesses,
            startups, and entrepreneurs establish a strong online presence.
          </p>

          <div className="hero-buttons">
            <a href="#request" className="primary-btn">
              Get Free Quote
            </a>

            <a href="#services" className="secondary-btn">
              View Services
            </a>
          </div>

          <div className="hero-features">

            <div className="feature-item">
              <span>⚡</span>
              <p>Fast Delivery</p>
            </div>

            <div className="feature-item">
              <span>📱</span>
              <p>Responsive Design</p>
            </div>

            <div className="feature-item">
              <span>💼</span>
              <p>Professional UI</p>
            </div>

            <div className="feature-item">
              <span>💬</span>
              <p>Free Support</p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hero-image">

          <img
            src={laptopImage}
            alt="CodeInsight Website Development"
          />

          <div className="hero-card">

            <h3>Why Choose Us?</h3>

            <ul>
              <li>✔ Modern UI/UX</li>
              <li>✔ Mobile Friendly</li>
              <li>✔ SEO Optimized</li>
              <li>✔ Affordable Pricing</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
      }
