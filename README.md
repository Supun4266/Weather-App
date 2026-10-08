# Weather App

A React app that shows the current weather for any city using the **OpenWeatherMap API**. Type a city name, hit Search, and see the temperature, conditions and country.

## Features

- Search weather by city name
- Live data from OpenWeatherMap (temperature in °C, description, country)
- Friendly error when a city isn't found
- API key kept out of the source code via an environment variable

## Tech stack

React 19 · Axios · Create React App · CSS

## Run locally

1. Get a free API key from [openweathermap.org](https://openweathermap.org/api).
2. Copy `.env.example` to `.env` and add your key:
   ```
   REACT_APP_OPENWEATHER_API_KEY=your_key_here
   ```
3. Install and start:
   ```bash
   npm install
   npm start
   ```
4. Open http://localhost:3000

## What I'd add next

- 5-day forecast view
- Loading state and better error messages
- Deploy a live demo on Vercel or Netlify
