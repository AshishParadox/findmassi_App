import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FindMaasi.com</h3>
            <p>
              Your trusted campus support partner at HIT and other institutions. 
              We connect students with reliable domestic helpers for a stress-free campus life.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/hire-maasi">Hire Maasi</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="mailto:support@findmaasi.com" className="social-link">
                📧 Email
              </a>
              <a href="https://instagram.com/findmaasi" target="_blank" rel="noopener noreferrer" className="social-link">
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FindMaasi.com. All rights reserved.</p>
          <p>Designed for students, by students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;