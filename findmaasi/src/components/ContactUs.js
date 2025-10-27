import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Contact form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="contact-us-page">
      <div className="hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or support</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>support@findmaasi.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>HIT Campus, Kolkata<br />West Bengal, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="mailto:support@findmaasi.com" className="social-icon email">
                    📧 Email
                  </a>
                  <a href="https://instagram.com/findmaasi" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    📸 Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-message">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactUs;