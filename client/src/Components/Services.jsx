import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    { title: 'Website Development', description: 'Custom and responsive websites tailored to your business.' },
    { title: 'E-commerce Solutions', description: 'Sell products online with secure, scalable shops.' },
    { title: 'Portfolio Websites', description: 'Create a professional online presence for individuals or brands.' },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
