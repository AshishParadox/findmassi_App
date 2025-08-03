import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo glow">FindMaasi.com</h3>
            <p className="footer-tagline">
              Your trusted campus support partner for a stress-free student life
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="/hire">Hire Maasi</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
                <li><a href="#refund">Refund Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:support@findmaasi.com">support@findmaasi.com</a>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+919876543210">+91 9876543210</a>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  HIT Campus, Haldia, West Bengal
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="mailto:support@findmaasi.com" className="social-link" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://instagram.com/findmaasi" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/findmaasi" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/findmaasi" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/findmaasi" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 FindMaasi.com. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart"></i> for HIT students</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer