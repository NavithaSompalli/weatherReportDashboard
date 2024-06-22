// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchRoute from './components/SearchRoute';
import WeatherChart from './components/WeatherBarChart';
import WeatherLineChart from './components/WeatherLineChart';
import WeatherTable from './components/WeatherTable';

import './App.css'

const cities = ['New York', 'London', 'Tokyo', 'Sydney','Hyderabad','Bangalore','Chennai','Anantapur'];

const App = () => {
  const [city, setCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=78f1b9448d3227cc20ba6817f0a6a813`);
        const data = response.data.list.map((item) => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          condition: item.weather[0].description,
        }));
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [city]);

  return (
    <>
    
      <div>
      <Header />
      <SearchRoute cities={cities} onCityChange={setCity} />
      <div className='charts-container'>
      <WeatherChart data={weatherData}/>
      <WeatherLineChart data={weatherData}/>
      
      </div>
     
      <WeatherTable data={weatherData}/>
      </div>
    </>
  );
};

export default App;
