import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted Campus Support Partner
          </h1>
          <p className="hero-subtitle">
            Reliable, affordable services to make campus living easier at HIT and beyond
          </p>
          <div className="hero-buttons">
            <Link to="/hire" className="btn btn-primary">
              Find Your Maasi
            </Link>
            <button 
              className="btn btn-outline"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <i className="fas fa-home fa-5x"></i>
            <p>Making Campus Life Easier</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  )
}

export default Home