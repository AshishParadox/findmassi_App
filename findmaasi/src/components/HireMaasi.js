import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HireMaasi.css';

// Mock data for maasi profiles
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
    photo: "https://via.placeholder.com/150x150/FFD700/000000?text=R",
    services: ["cooking", "cleaning", "laundry"],
    foodType: "veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Paratha"],
    specialFoods: ["Chicken Curry", "Fish Curry", "Biryani"]
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
    photo: "https://via.placeholder.com/150x150/FFD700/000000?text=F",
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
    photo: "https://via.placeholder.com/150x150/FFD700/000000?text=S",
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
    photo: "https://via.placeholder.com/150x150/FFD700/000000?text=M",
    services: ["cooking", "cleaning"],
    foodType: "non-veg",
    basicFoods: ["Dal Chawal", "Roti", "Sabji", "Rice"],
    specialFoods: ["Chicken Curry", "Fish Curry", "Egg Curry"]
  }
];

const HireMaasi = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: '',
    services: [],
    foodType: ''
  });
  const [filteredMaasis, setFilteredMaasis] = useState(mockMaasis);
  const [showSuccess, setShowSuccess] = useState(false);

  const locations = ["Khudiramnagar", "Gandhinagar", "Abhinandan", "CC"];
  const services = ["cooking", "cleaning", "laundry", "grocery"];

  const handleFilterChange = (filterType, value) => {
    let newFilters = { ...filters };
    
    if (filterType === 'services') {
      if (filters.services.includes(value)) {
        newFilters.services = filters.services.filter(service => service !== value);
      } else {
        newFilters.services = [...filters.services, value];
      }
    } else {
      newFilters[filterType] = value;
    }
    
    setFilters(newFilters);
  };

  const handleSubmit = () => {
    let filtered = mockMaasis;
    
    if (filters.location) {
      filtered = filtered.filter(maasi => maasi.location === filters.location);
    }
    
    if (filters.services.length > 0) {
      filtered = filtered.filter(maasi => 
        filters.services.some(service => maasi.services.includes(service))
      );
    }
    
    if (filters.foodType) {
      filtered = filtered.filter(maasi => maasi.foodType === filters.foodType);
    }
    
    setFilteredMaasis(filtered);
  };

  const handleArrangeCall = (maasiId) => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleMaasiClick = (maasiId) => {
    navigate(`/maasi/${maasiId}`);
  };

  return (
    <div className="hire-maasi-page">
      <div className="hero-section">
        <div className="container">
          <h1>Hire Maasi</h1>
          <p>Find the perfect domestic helper for your needs</p>
        </div>
      </div>

      <div className="filters-section">
        <div className="container">
          <h2>Search Filters</h2>
          <div className="filters-grid">
            <div className="filter-group">
              <label>Location</label>
              <select 
                value={filters.location} 
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Services</label>
              <div className="checkbox-group">
                {services.map(service => (
                  <label key={service} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={filters.services.includes(service)}
                      onChange={() => handleFilterChange('services', service)}
                    />
                    <span className="checkbox-text">{service.charAt(0).toUpperCase() + service.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>Food Type</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="foodType"
                    value="veg"
                    checked={filters.foodType === 'veg'}
                    onChange={(e) => handleFilterChange('foodType', e.target.value)}
                  />
                  <span className="radio-text">Vegetarian</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="foodType"
                    value="non-veg"
                    checked={filters.foodType === 'non-veg'}
                    onChange={(e) => handleFilterChange('foodType', e.target.value)}
                  />
                  <span className="radio-text">Non-Vegetarian</span>
                </label>
              </div>
            </div>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Search Maasi
          </button>
        </div>
      </div>

      <div className="results-section">
        <div className="container">
          <h2>Available Maasis ({filteredMaasis.length})</h2>
          <div className="maasi-grid">
            {filteredMaasis.map(maasi => (
              <div key={maasi.id} className="maasi-card" onClick={() => handleMaasiClick(maasi.id)}>
                <div className="maasi-photo">
                  <img src={maasi.photo} alt={maasi.name} />
                </div>
                <div className="maasi-info">
                  <h3>{maasi.name}</h3>
                  <p className="location">📍 {maasi.location}</p>
                  <p className="experience">👩‍🍳 {maasi.experience} years experience</p>
                  <div className="services-tags">
                    {maasi.services.map(service => (
                      <span key={service} className="service-tag">
                        {service.charAt(0).toUpperCase() + service.slice(1)}
                      </span>
                    ))}
                  </div>
                  <p className="food-type">
                    🍽️ {maasi.foodType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-message">
          ✅ Successfully arranged a call!
        </div>
      )}
    </div>
  );
};

export default HireMaasi;