import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>Contact us at: auwaluizziddin2212@gmail.com</p>
    <div className="social-links">
      <a href="#facebook" aria-label="Facebook">
        <FaFacebook size={24} />
      </a>
      <a href="#twitter" aria-label="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="#instagram" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
