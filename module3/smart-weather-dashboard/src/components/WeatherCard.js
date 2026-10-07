import React from "react";

function WeatherCard({ weather }) {

  if (!weather) {
    return null;
  }

  return (
    <div className="card weather-card">

      <h2>
        📍 {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>
        {weather.weather[0].main}
      </h3>

      <p>
        🌡️ Feels Like: {Math.round(weather.main.feels_like)}°C
      </p>

      <p>
        💧 Humidity: {weather.main.humidity}%
      </p>

      <p>
        💨 Wind: {weather.wind.speed} m/s
      </p>

      <p>
        🌡️ Minimum: {Math.round(weather.main.temp_min)}°C
      </p>

      <p>
        🌡️ Maximum: {Math.round(weather.main.temp_max)}°C
      </p>

    </div>
  );
}

export default WeatherCard;