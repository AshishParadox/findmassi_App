import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLoginClick, onLogout }) => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-text">FindMaasi.com</span>
          </Link>
        </div>
        
        <div className="navbar-links">
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About Us
          </button>
          <Link to="/hire-maasi" className="nav-link">
            Hire Maasi
          </Link>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>
        
        <div className="navbar-auth">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;