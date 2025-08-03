import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ isLoggedIn, onLogout, onLoginClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text glow">FindMaasi.com</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About Us
            </button>
          </li>
          <li className="nav-item">
            <Link to="/hire" className="nav-link">
              Hire Maasi
            </Link>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </li>
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <button className="auth-btn" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <button className="auth-btn" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar