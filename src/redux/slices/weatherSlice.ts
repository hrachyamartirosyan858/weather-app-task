import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Weather, Forecast, WeatherState } from '../../types';

const API_KEY = '1357b4df17bfa37f8797aa74c3240fb5';

const initialState: WeatherState = {
  current: null,
  forecast: null,
  status: 'idle',
  error: null,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city: string) => {
  const response = await axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  return response.data;
});

export const fetchForecast = createAsyncThunk('weather/fetchForecast', async (city: string) => {
  const response = await axios.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.current = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      });
  },
});

export default weatherSlice.reducer;
