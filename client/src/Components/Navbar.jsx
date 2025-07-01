import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // default active section

  const handleSetActive = (hash) => {
    setActiveLink(hash);
    setIsOpen(false); // close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/codeinsight-logo.png" alt="CodeInsight Logo" className="logo" />
        <span className="brand-text">
         <span className="blue-text">CODE</span><span className="black-text"> INSIGHT</span>
        </span>

      </div>

     

      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a
          href="#home"
          onClick={() => handleSetActive('#home')}
          className={activeLink === '#home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#services"
          onClick={() => handleSetActive('#services')}
          className={activeLink === '#services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="#request"
          onClick={() => handleSetActive('#request')}
          className={activeLink === '#request' ? 'active' : ''}
        >
          Request Service
        </a>
        <a
          href="#request"
          onClick={() => handleSetActive('#contact')}
          className={activeLink === '#contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
