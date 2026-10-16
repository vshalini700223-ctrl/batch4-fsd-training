import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const searchWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    setError("");
    setWeather(null);

    try {
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );

      const locationData = await locationResponse.json();

      if (!locationData.results) {
        setError("City not found");
        return;
      }

      const location = locationData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        city: location.name,
        country: location.country,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m
      });
    } catch (error) {
      setError("Unable to get weather information");
    }
  };

  return (
    <div className="app">

      <h1>🌤️ Weather Dashboard</h1>

      <p>Search for the current weather of any city</p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>
          Search
        </button>

      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {weather && (
        <div className="weather-card">

          <h2>
            📍 {weather.city}, {weather.country}
          </h2>

          <h3>
            🌡️ {weather.temperature} °C
          </h3>

          <p>
            💧 Humidity: {weather.humidity}%
          </p>

          <p>
            💨 Wind Speed: {weather.wind} km/h
          </p>

        </div>
      )}

    </div>
  );
}

export default App;