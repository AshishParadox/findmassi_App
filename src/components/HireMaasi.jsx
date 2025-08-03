import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { maasiData } from '../data/maasiData'
import './HireMaasi.css'

const HireMaasi = () => {
  const [filters, setFilters] = useState({
    location: '',
    services: [],
    foodType: ''
  })
  const [filteredMaasis, setFilteredMaasis] = useState([])
  const [showResults, setShowResults] = useState(false)

  const locations = ['Khudiramnagar', 'Gandhinagar', 'Abhinandan', 'CC']
  const services = ['cooking', 'cleaning', 'laundry', 'grocery']

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value })
  }

  const handleServiceChange = (service) => {
    const updatedServices = filters.services.includes(service)
      ? filters.services.filter(s => s !== service)
      : [...filters.services, service]
    setFilters({ ...filters, services: updatedServices })
  }

  const handleFoodTypeChange = (e) => {
    setFilters({ ...filters, foodType: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let filtered = maasiData

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(maasi => maasi.location === filters.location)
    }

    // Filter by services
    if (filters.services.length > 0) {
      filtered = filtered.filter(maasi => 
        filters.services.every(service => maasi.services.includes(service))
      )
    }

    // Filter by food type
    if (filters.foodType) {
      filtered = filtered.filter(maasi => {
        if (filters.foodType === 'veg') return maasi.foodType === 'veg' || maasi.foodType === 'both'
        if (filters.foodType === 'nonveg') return maasi.foodType === 'both'
        return true
      })
    }

    setFilteredMaasis(filtered)
    setShowResults(true)
  }

  const resetFilters = () => {
    setFilters({ location: '', services: [], foodType: '' })
    setShowResults(false)
    setFilteredMaasis([])
  }

  return (
    <div className="hire-maasi">
      <div className="hire-header">
        <div className="container">
          <h1 className="page-title">Find Your Perfect Maasi</h1>
          <p className="page-subtitle">
            Use our smart filters to find the ideal helper for your needs
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filter-section">
          <div className="filter-card">
            <h2 className="filter-title">Search Filters</h2>
            
            <form onSubmit={handleSubmit} className="filter-form">
              {/* Location Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <i className="fas fa-map-marker-alt"></i>
                  Location
                </label>
                <select 
                  value={filters.location} 
                  onChange={handleLocationChange}
                  className="filter-select"
                >
                  <option value="">Select Location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Services Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <i className="fas fa-tasks"></i>
                  Services Required
                </label>
                <div className="checkbox-group">
                  {services.map(service => (
                    <label key={service} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={filters.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom"></span>
                      <span className="capitalize">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Food Type Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <i className="fas fa-utensils"></i>
                  Food Type
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="foodType"
                      value=""
                      checked={filters.foodType === ''}
                      onChange={handleFoodTypeChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span>Any</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="foodType"
                      value="veg"
                      checked={filters.foodType === 'veg'}
                      onChange={handleFoodTypeChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span>Vegetarian</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="foodType"
                      value="nonveg"
                      checked={filters.foodType === 'nonveg'}
                      onChange={handleFoodTypeChange}
                      className="radio-input"
                    />
                    <span className="radio-custom"></span>
                    <span>Non-Vegetarian</span>
                  </label>
                </div>
              </div>

              <div className="filter-buttons">
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                  Search Maasis
                </button>
                <button type="button" onClick={resetFilters} className="btn btn-outline">
                  <i className="fas fa-refresh"></i>
                  Reset Filters
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="results-section">
            <div className="results-header">
              <h2 className="results-title">
                {filteredMaasis.length > 0 
                  ? `Found ${filteredMaasis.length} Maasi${filteredMaasis.length > 1 ? 's' : ''} for you`
                  : 'No Maasis found matching your criteria'
                }
              </h2>
            </div>

            {filteredMaasis.length > 0 && (
              <div className="maasi-grid">
                {filteredMaasis.map(maasi => (
                  <div key={maasi.id} className="maasi-card">
                    <div className="maasi-photo">
                      <img src={maasi.photo} alt={maasi.name} />
                      <div className="rating-badge">
                        <i className="fas fa-star"></i>
                        {maasi.rating}
                      </div>
                    </div>
                    
                    <div className="maasi-info">
                      <h3 className="maasi-name">{maasi.name}</h3>
                      <p className="maasi-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {maasi.location}
                      </p>
                      <p className="maasi-experience">
                        <i className="fas fa-clock"></i>
                        {maasi.experience} years experience
                      </p>
                      <div className="maasi-services">
                        {maasi.services.map(service => (
                          <span key={service} className="service-tag">
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="maasi-price">
                        <span className="price-label">Starting from</span>
                        <span className="price-amount">{maasi.price}</span>
                      </div>
                    </div>
                    
                    <div className="maasi-actions">
                      <Link to={`/maasi/${maasi.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default HireMaasi