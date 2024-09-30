import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchForecast } from '../redux/slices/weatherSlice';

const DailyWeather: React.FC = () => {
  
  const dispatch = useDispatch<AppDispatch>();

  const forecast = useSelector((state: RootState) => state.weather.forecast?.list);
  const status = useSelector((state: RootState) => state.weather.status);
  const error = useSelector((state: RootState) => state.weather.error);
  const currentCity = 'Yerevan'; 
 
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchForecast(currentCity)); 
    };

    fetchData();
  }, [dispatch, currentCity]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      {forecast && forecast.map((day, index) => (
        <div key={index}>
          <h3>{day.dt_txt}</h3>
          <p>{day.main.temp} °C</p>
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;
