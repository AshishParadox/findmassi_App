import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import HireMaasi from './components/HireMaasi';
import ContactUs from './components/ContactUs';
import MaasiProfile from './components/MaasiProfile';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = (email, password) => {
    // Simple login logic - in real app, you'd validate against backend
    if (email && password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLoginClick}
          onLogout={handleLogout}
        />
        
        {showLoginModal && (
          <LoginModal 
            onLogin={handleLogin}
            onClose={() => setShowLoginModal(false)}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hire-maasi" element={<HireMaasi />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/maasi/:id" element={<MaasiProfile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
