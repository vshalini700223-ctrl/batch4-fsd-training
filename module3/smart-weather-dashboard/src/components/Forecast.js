import React from "react";

function Forecast({ forecast }) {

  if (!forecast) {
    return null;
  }

  return (
    <div>

      <h2>📅 5 Day Forecast</h2>

      <div className="forecast-container">

        {forecast.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .map((item, index) => (

            <div className="forecast-card" key={index}>

              <p>
                {new Date(item.dt_txt).toLocaleDateString()}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />

              <h3>
                {Math.round(item.main.temp)}°C
              </h3>

              <p>
                {item.weather[0].main}
              </p>

              <p>
                💧 {item.main.humidity}%
              </p>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Forecast;