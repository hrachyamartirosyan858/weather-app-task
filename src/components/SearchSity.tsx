// src/components/SearchCity.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store'; 
import { fetchWeather } from '../redux/slices/weatherSlice';

const SearchCity: React.FC = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeather(city)); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCity;
