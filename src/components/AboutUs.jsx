import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-header text-center">
            <h2 className="section-title">About Us</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <div className="about-card">
                <h3>Welcome to FindMaasi.com</h3>
                <p>
                  Your trusted campus support partner at HIT (and other institutions). 
                  We understand the challenges students face while balancing academics and daily life, 
                  which is why we offer reliable, affordable services to make campus living easier.
                </p>
              </div>
              
              <div className="about-card">
                <h3>Our Mission</h3>
                <p>
                  We empower students by handling essential tasks—cooking, cleaning, grocery shopping, 
                  laundry, and more—so they can focus on studies and personal growth. Our goal is to 
                  provide stress-free solutions tailored to student needs.
                </p>
              </div>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h4>Cooking Services</h4>
                <p>Fresh, homemade meals prepared with care and hygiene</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-broom"></i>
                </div>
                <h4>Cleaning Services</h4>
                <p>Keep your living space spotless and organized</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shopping-basket"></i>
                </div>
                <h4>Grocery Shopping</h4>
                <p>Get all your daily essentials delivered to your doorstep</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <h4>Laundry Services</h4>
                <p>Professional washing and folding of your clothes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs