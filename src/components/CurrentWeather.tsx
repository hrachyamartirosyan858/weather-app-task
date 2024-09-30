// src/components/CurrentWeather.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/slices/weatherSlice';

const CurrentWeather: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather.current);
  const status = useSelector((state: RootState) => state.weather.status);
  const error = useSelector((state: RootState) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather('Yerevan'));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {weather && (
        <>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
