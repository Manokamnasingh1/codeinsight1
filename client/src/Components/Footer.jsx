import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // 👈 Make sure this CSS file is imported

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      
      <div className="footer-social">
        <a
          href="https://www.instagram.com/manokamnasingh.official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/codeinsinght/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-text">
        <p>© 2025 Codeinsight. All rights reserved.</p>
        <p>
          Built with <span role="img" aria-label="love">❤️</span>
        </p>
      </div>
    </footer>
  );
}
