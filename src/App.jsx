import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import HireMaasi from './components/HireMaasi'
import ContactUs from './components/ContactUs'
import MaasiProfile from './components/MaasiProfile'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
  }

  return (
    <Router>
      <div className="App">
        <Navbar 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onLoginClick={openLoginModal}
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
          <Route path="/hire" element={<HireMaasi />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/maasi/:id" element={<MaasiProfile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App