import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { maasiData } from '../data/maasiData'
import './MaasiProfile.css'

const MaasiProfile = () => {
  const { id } = useParams()
  const [showSuccess, setShowSuccess] = useState(false)
  
  const maasi = maasiData.find(m => m.id === parseInt(id))

  if (!maasi) {
    return (
      <div className="profile-not-found">
        <div className="container">
          <h2>Maasi not found</h2>
          <Link to="/hire" className="btn btn-primary">
            Back to Search
          </Link>
        </div>
      </div>
    )
  }

  const handleArrangeCall = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 4000)
  }

  return (
    <div className="maasi-profile">
      {/* Header Section */}
      <div className="profile-header">
        <div className="container">
          <Link to="/hire" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Search
          </Link>
          
          <div className="profile-hero">
            <div className="profile-image">
              <img src={maasi.photo} alt={maasi.name} />
              <div className="rating-badge">
                <i className="fas fa-star"></i>
                {maasi.rating}
              </div>
            </div>
            
            <div className="profile-intro">
              <h1 className="profile-name">{maasi.name}</h1>
              <p className="profile-location">
                <i className="fas fa-map-marker-alt"></i>
                {maasi.location}
              </p>
              <p className="profile-experience">
                <i className="fas fa-clock"></i>
                {maasi.experience} years of experience
              </p>
              <div className="profile-price">
                <span className="price-label">Starting from</span>
                <span className="price-amount">{maasi.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="profile-details">
        <div className="container">
          <div className="details-grid">
            {/* Personal Information */}
            <div className="detail-card">
              <h3 className="card-title">
                <i className="fas fa-user"></i>
                Personal Information
              </h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Age</span>
                  <span className="info-value">{maasi.age} years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Marital Status</span>
                  <span className="info-value">{maasi.maritalStatus}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Religion</span>
                  <span className="info-value">{maasi.religion}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education</span>
                  <span className="info-value">{maasi.education}</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="detail-card">
              <h3 className="card-title">
                <i className="fas fa-language"></i>
                Languages Known
              </h3>
              <div className="languages-list">
                {maasi.languages.map((language, index) => (
                  <span key={index} className="language-tag">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="detail-card">
              <h3 className="card-title">
                <i className="fas fa-tasks"></i>
                Services Offered
              </h3>
              <div className="services-list">
                {maasi.services.map((service, index) => (
                  <div key={index} className="service-item">
                    <i className="fas fa-check-circle"></i>
                    <span className="capitalize">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooking Specialties */}
            <div className="detail-card">
              <h3 className="card-title">
                <i className="fas fa-utensils"></i>
                Cooking Specialties
              </h3>
              <div className="food-type">
                <p className="food-type-label">
                  Food Type: 
                  <span className={`food-badge ${maasi.foodType}`}>
                    {maasi.foodType === 'both' ? 'Veg & Non-Veg' : 
                     maasi.foodType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </p>
              </div>
              <div className="specialties-grid">
                {maasi.specialties.map((specialty, index) => (
                  <div key={index} className="specialty-item">
                    <i className="fas fa-bowl-food"></i>
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <div className="cta-card">
              <h3>Ready to hire {maasi.name}?</h3>
              <p>Get in touch with her to discuss your requirements and schedule</p>
              <button 
                onClick={handleArrangeCall} 
                className="arrange-call-btn"
                disabled={showSuccess}
              >
                <i className="fas fa-phone"></i>
                {showSuccess ? 'Call Arranged!' : 'Arrange a Call'}
              </button>
              
              {showSuccess && (
                <div className="success-message fade-in">
                  <i className="fas fa-check-circle"></i>
                  Successfully arranged a call with {maasi.name}! You will be contacted shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaasiProfile