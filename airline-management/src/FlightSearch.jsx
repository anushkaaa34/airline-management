import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlightSearch.css';

const FlightSearch = () => {
    
  const [formData, setFormData] = useState({
    tripType: 'one_way',
    from: 'del',
    to: 'jfk',
    departure: '',
    return: '',
    cabinClass: 'economy',
    adults: 2,
    children: 0,
    addNearbyAirportsFrom: false,
    addNearbyAirportsTo: false,
    directFlightsOnly: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <>

      <h1 style = {{color:"white" , paddingTop:"10%" , paddingLeft:"5%"}}>The Sky is waiting for YOU</h1>
        <br></br>
       <h3 style = {{color:"white", fontSize:"1.75rem", paddingLeft:"4%"}}>Where Would you like to go?</h3>

    <div className="form-container">
      <h1>Search Flights</h1>
      <form onSubmit={handleSubmit}>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="tripType"
              value="round_trip"
              checked={formData.tripType === 'round_trip'}
              onChange={handleChange}
            />
            Round Trip
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="one_way"
              checked={formData.tripType === 'one_way'}
              onChange={handleChange}
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="multi_city"
              checked={formData.tripType === 'multi_city'}
              onChange={handleChange}
            />
            Multi-city
          </label>
        </div>
        <label htmlFor="from">From</label>
        <select id="from" name="from" value={formData.from} onChange={handleChange}>
          <option value="del">New Delhi (DEL)</option>
          {/* Add more options as needed */}
        </select>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="addNearbyAirportsFrom"
              checked={formData.addNearbyAirportsFrom}
              onChange={handleChange}
            />
            Add Nearby Airports
          </label>
        </div>
        <label htmlFor="to">To</label>
        <select id="to" name="to" value={formData.to} onChange={handleChange}>
          <option value="jfk">New York (JFK)</option>
          {/* Add more options as needed */}
        </select>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="addNearbyAirportsTo"
              checked={formData.addNearbyAirportsTo}
              onChange={handleChange}
            />
            Add Nearby Airports
          </label>
        </div>
        <label htmlFor="departure">Departure</label>
        <input
          type="date"
          id="departure"
          name="departure"
          value={formData.departure}
          onChange={handleChange}
        />
        <label htmlFor="return">Return</label>
        <input
          type="date"
          id="return"
          name="return"
          value={formData.return}
          onChange={handleChange}
        />
        <label htmlFor="cabinClass">Cabin Class</label>
        <select id="cabinClass" name="cabinClass" value={formData.cabinClass} onChange={handleChange}>
          <option value="economy">Economy</option>
          {/* Add more options as needed */}
        </select>
        <label htmlFor="adults">Adults (16+)</label>
        <input
          type="number"
          id="adults"
          name="adults"
          min="1"
          value={formData.adults}
          onChange={handleChange}
        />
        <label htmlFor="children">Children (0-15)</label>
        <input
          type="number"
          id="children"
          name="children"
          min="0"
          value={formData.children}
          onChange={handleChange}
        />
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="directFlightsOnly"
              checked={formData.directFlightsOnly}
              onChange={handleChange}
            />
            Direct Flights Only
          </label>
        </div>
        <button type="submit">Search Flights</button>
      </form>
    </div>
    </>

  );
};


export default FlightSearch;
