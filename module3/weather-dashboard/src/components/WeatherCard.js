function getWeatherDescription(code) {
  const weatherCodes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Rain",
    65: "Heavy Rain",
    71: "Light Snow",
    73: "Snow",
    75: "Heavy Snow",
    80: "Rain Showers",
    81: "Rain Showers",
    82: "Heavy Rain Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Hail",
    99: "Thunderstorm with Hail"
  };

  return weatherCodes[code] || "Unknown Weather";
}

function getWeatherIcon(code) {
  if (code === 0) {
    return "☀️";
  }

  if (code === 1 || code === 2) {
    return "🌤️";
  }

  if (code === 3) {
    return "☁️";
  }

  if (code === 45 || code === 48) {
    return "🌫️";
  }

  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    return "🌧️";
  }

  if (code === 71 || code === 73 || code === 75) {
    return "❄️";
  }

  if (code === 95 || code === 96 || code === 99) {
    return "⛈️";
  }

  return "🌡️";
}

function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="welcome-card">
        <div className="welcome-icon">🌦️</div>

        <h2>Check the Weather</h2>

        <p>
          Search for a city to see its current weather conditions,
          temperature, humidity and wind information.
        </p>
      </div>
    );
  }

  const description = getWeatherDescription(
    weather.current.weather_code
  );

  const icon = getWeatherIcon(
    weather.current.weather_code
  );

  return (
    <div className="weather-card">
      <div className="location">
        <span>📍</span>
        <h2>{weather.city}</h2>
        <span className="country">
          {weather.country}
        </span>
      </div>

      <div className="main-weather">
        <div className="weather-icon">
          {icon}
        </div>

        <div>
          <div className="temperature">
            {Math.round(weather.current.temperature_2m)}
            <span>°C</span>
          </div>

          <div className="condition">
            {description}
          </div>
        </div>
      </div>

      <div className="weather-details">

        <div className="detail-box">
          <div className="detail-icon">💧</div>

          <div>
            <p>Humidity</p>
            <h3>
              {weather.current.relative_humidity_2m}%
            </h3>
          </div>
        </div>

        <div className="detail-box">
          <div className="detail-icon">💨</div>

          <div>
            <p>Wind Speed</p>
            <h3>
              {weather.current.wind_speed_10m} km/h
            </h3>
          </div>
        </div>

        <div className="detail-box">
          <div className="detail-icon">🌡️</div>

          <div>
            <p>Feels Like</p>
            <h3>
              {Math.round(weather.current.apparent_temperature)}°C
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;