import React from 'react';
import './index.css'

const SearchRoute = ({ cities, onCityChange }) => (
  <div>
    <label htmlFor="city" className='headline'>Choose a city: </label>
    <select id="city" onChange={(e) => onCityChange(e.target.value)} className="input-element">
      {cities.map((city) => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  </div>
);

export default SearchRoute;