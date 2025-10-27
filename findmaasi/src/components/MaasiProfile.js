import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MaasiProfile.css';

// Mock data for maasi profiles (same as in HireMaasi)
const mockMaasis = [
  {
    id: 1,
    name: "Rekha Devi",
    age: 35,
    experience: 8,
    location: "Khudiramnagar",
    maritalStatus: "Married",
    religion: "Hindu",
    education: "10th Pass",
    languages: ["Hindi", "Bengali"],
    photo: "https://via.placeholder.com/300x300/FFD700/000000?text=R",
    services: ["cooking", "cleaning", "laundry"],
    foodType: "veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Paratha"],
    specialFoods: ["Paneer Curry", "Mixed Vegetables", "Dal Makhani"]
  },
  {
    id: 2,
    name: "Fatima Begum",
    age: 42,
    experience: 12,
    location: "Gandhinagar",
    maritalStatus: "Married",
    religion: "Muslim",
    education: "8th Pass",
    languages: ["Hindi", "Urdu"],
    photo: "https://via.placeholder.com/300x300/FFD700/000000?text=F",
    services: ["cooking", "cleaning", "grocery"],
    foodType: "non-veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Ghugni"],
    specialFoods: ["Chicken Curry", "Mutton Curry", "Kebabs"]
  },
  {
    id: 3,
    name: "Sunita Kumari",
    age: 38,
    experience: 10,
    location: "Abhinandan",
    maritalStatus: "Married",
    religion: "Hindu",
    education: "12th Pass",
    languages: ["Hindi", "English"],
    photo: "https://via.placeholder.com/300x300/FFD700/000000?text=S",
    services: ["cooking", "cleaning", "laundry", "grocery"],
    foodType: "veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Paratha", "Pulao"],
    specialFoods: ["Paneer Curry", "Mixed Vegetables", "Dal Makhani"]
  },
  {
    id: 4,
    name: "Meera Bai",
    age: 45,
    experience: 15,
    location: "CC",
    maritalStatus: "Widowed",
    religion: "Hindu",
    education: "10th Pass",
    languages: ["Hindi", "Bengali", "English"],
    photo: "https://via.placeholder.com/300x300/FFD700/000000?text=M",
    services: ["cooking", "cleaning"],
    foodType: "non-veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Rice"],
    specialFoods: ["Chicken Curry", "Fish Curry", "Egg Curry"]
  }
];

const MaasiProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const maasi = mockMaasis.find(m => m.id === parseInt(id));
  
  if (!maasi) {
    return (
      <div className="maasi-profile-page">
        <div className="container">
          <h1>Maasi not found</h1>
          <button onClick={() => navigate('/hire-maasi')} className="back-btn">
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const handleArrangeCall = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="maasi-profile-page">
      <div className="container">
        <button onClick={() => navigate('/hire-maasi')} className="back-btn">
          ← Back to Search
        </button>
        
        <div className="profile-header">
          <div className="profile-photo">
            <img src={maasi.photo} alt={maasi.name} />
          </div>
          <div className="profile-info">
            <h1>{maasi.name}</h1>
            <p className="location">📍 {maasi.location}</p>
            <p className="experience">👩‍🍳 {maasi.experience} years of experience</p>
            <div className="services-overview">
              {maasi.services.map(service => (
                <span key={service} className="service-badge">
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h2>Personal Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Age:</span>
                <span className="detail-value">{maasi.age} years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Marital Status:</span>
                <span className="detail-value">{maasi.maritalStatus}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Religion:</span>
                <span className="detail-value">{maasi.religion}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">{maasi.education}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Languages:</span>
                <span className="detail-value">{maasi.languages.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Services Offered</h2>
            <div className="services-list">
              {maasi.services.map(service => (
                <div key={service} className="service-item">
                  <span className="service-icon">
                    {service === 'cooking' && '🍳'}
                    {service === 'cleaning' && '🧹'}
                    {service === 'laundry' && '👕'}
                    {service === 'grocery' && '🛒'}
                  </span>
                  <span className="service-name">{service.charAt(0).toUpperCase() + service.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2>Cooking Skills</h2>
            <div className="cooking-info">
              <div className="food-type-info">
                <h3>Food Type: {maasi.foodType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</h3>
              </div>
              
              <div className="food-skills">
                <div className="basic-foods">
                  <h4>Basic Foods:</h4>
                  <ul>
                    {maasi.basicFoods.map(food => (
                      <li key={food}>{food}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="special-foods">
                  <h4>Special Dishes:</h4>
                  <ul>
                    {maasi.specialFoods.map(food => (
                      <li key={food}>{food}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-section">
          <button onClick={handleArrangeCall} className="arrange-call-btn">
            📞 Arrange a Call
          </button>
        </div>

        {showSuccess && (
          <div className="success-message">
            ✅ Successfully arranged a call with {maasi.name}!
          </div>
        )}
      </div>
    </div>
  );
};

export default MaasiProfile;