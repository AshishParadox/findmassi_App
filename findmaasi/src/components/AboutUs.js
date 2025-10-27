import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="hero-subtitle">
            Your trusted campus support partner at HIT and other institutions
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              We empower students by handling essential tasks—cooking, cleaning, 
              grocery shopping, laundry, and more—so they can focus on studies and personal growth. 
              Our goal is to provide stress-free solutions tailored to student needs.
            </p>
          </div>

          <div className="story-section">
            <h2>Welcome to FindMaasi.com</h2>
            <p>
              We understand the challenges students face while balancing academics and daily life, 
              which is why we offer reliable, affordable services to make campus living easier.
            </p>
            <p>
              At FindMaasi.com, we believe that every student deserves a comfortable and 
              stress-free campus experience. Our platform connects students with experienced 
              and trustworthy domestic helpers who can assist with various household tasks.
            </p>
          </div>

          <div className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🍳</div>
                <h3>Cooking</h3>
                <p>Delicious home-cooked meals including both vegetarian and non-vegetarian options. 
                   From basic dal-chawal to special dishes like chicken curry and fish preparations.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🧹</div>
                <h3>Cleaning</h3>
                <p>Comprehensive cleaning services including room cleaning, kitchen maintenance, 
                   bathroom cleaning, and general household upkeep.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🛒</div>
                <h3>Grocery Shopping</h3>
                <p>Reliable grocery shopping services with fresh produce, daily essentials, 
                   and household items delivered to your doorstep.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">👕</div>
                <h3>Laundry</h3>
                <p>Complete laundry services including washing, ironing, and folding of clothes 
                   to keep your wardrobe fresh and organized.</p>
              </div>
            </div>
          </div>

          <div className="locations-section">
            <h2>We Serve</h2>
            <p>Currently serving students in the following areas:</p>
            <div className="locations-grid">
              <div className="location">Khudiramnagar</div>
              <div className="location">Gandhinagar</div>
              <div className="location">Abhinandan</div>
              <div className="location">CC (Campus Corner)</div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Reliability</h3>
                <p>Verified and trusted domestic helpers with background checks</p>
              </div>
              <div className="value-card">
                <h3>Affordability</h3>
                <p>Student-friendly pricing with transparent cost structure</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>High-quality services with customer satisfaction guarantee</p>
              </div>
              <div className="value-card">
                <h3>Convenience</h3>
                <p>Easy booking and flexible scheduling options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;