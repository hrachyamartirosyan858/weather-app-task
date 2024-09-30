import { ReactNode } from "react";

export interface Weather {
    name: ReactNode;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
  }
  
  export interface Forecast {
    list: Array<{
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      };
      weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
      }>;
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
      };
      visibility: number;
      pop: number; 
      sys: {
        pod: string;
      };
      dt_txt: string; 
    }>;
    city: {
      id: number;
      name: string;
      coord: {
        lon: number;
        lat: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  }
  
  export interface WeatherState {
    current: Weather | null;
    forecast: Forecast | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  