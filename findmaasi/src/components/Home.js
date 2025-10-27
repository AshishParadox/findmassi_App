import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">FindMaasi.com</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted campus support partner at HIT and other institutions
          </p>
          <p className="hero-description">
            We understand the challenges students face while balancing academics and daily life. 
            Find reliable, affordable services to make campus living easier.
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => document.getElementById('hire-maasi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Maasi
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                We empower students by handling essential tasks—cooking, cleaning, 
                grocery shopping, laundry, and more—so they can focus on studies and personal growth. 
                Our goal is to provide stress-free solutions tailored to student needs.
              </p>
              <p>
                Welcome to FindMaasi.com, your trusted campus support partner at HIT 
                (and other institutions). We understand the challenges students face while 
                balancing academics and daily life, which is why we offer reliable, 
                affordable services to make campus living easier.
              </p>
            </div>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🍳</div>
                <h4>Cooking</h4>
                <p>Delicious home-cooked meals</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🧹</div>
                <h4>Cleaning</h4>
                <p>Spotless living spaces</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🛒</div>
                <h4>Shopping</h4>
                <p>Grocery and essentials</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👕</div>
                <h4>Laundry</h4>
                <p>Clean and fresh clothes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hire-maasi" className="hire-section">
        <div className="container">
          <h2>Ready to Hire?</h2>
          <p className="section-subtitle">
            Find the perfect maasi for your needs with our easy-to-use search system
          </p>
          <button 
            className="cta-button primary"
            onClick={() => window.location.href = '/hire-maasi'}
          >
            Start Searching
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;