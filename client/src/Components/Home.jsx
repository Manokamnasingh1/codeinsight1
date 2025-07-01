import React from 'react';
import './Home.css'; // Be sure to create this CSS file
import laptopImage from '../assets/laptop.jpg'; // Add the image used in your design here

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>We Build Websites That Grow Your Business</h1>
          <p>We build clean, responsive websites designed to engage users and grow your brand.</p>
         <a href="#request" className="cta-button">Tell Us About Your Project</a>

        </div>

        <div className="hero-image">
          <img src={laptopImage} alt="Laptop showcasing landing page" />
         
        </div>
      </div>
    </section>
  );
}
