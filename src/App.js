import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Add styling here

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "0fa20a763bf18447bc0d29d6d581514f";

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
    try {
      const response = await axios.get(URL);
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="app">
      <div className="wp">
      <div className="weather-container">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Country: {weather.sys.country}</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
 