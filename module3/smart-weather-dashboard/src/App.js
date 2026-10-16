import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import TravelCard from "./components/TravelCard";
import TravelSuggestion from "./components/TravelSuggestion";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "9fa4836fde7c3b05403c4891919d1759";

  const searchWeather = async () => {

    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error("Forecast not available");
      }

      const forecastData = await forecastResponse.json();

      setWeather(weatherData);
      setForecast(forecastData);

    }
    catch (error) {

      setWeather(null);
      setForecast(null);
      setError("City not found. Please enter a valid city name.");

    }

    setLoading(false);
  };


  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={

            <div className="page">

              <h1>🌤️ Smart Weather & Travel Dashboard</h1>

              <p>
                Discover the weather and find the perfect
                destination for your next trip.
              </p>

              <div className="card">

                <h2>🌎 Explore the World</h2>

                <p>
                  Find beautiful places, discover new
                  experiences and plan your journey with
                  confidence.
                </p>

                <Link to="/travel">
                  <button>Explore Now</button>
                </Link>

              </div>


              <div className="card">

                <h2>☀️ Check Before You Go</h2>

                <p>
                  Know the weather conditions before starting
                  your journey.
                </p>

                <Link to="/weather">
                  <button>Check Weather</button>
                </Link>

              </div>

            </div>

          }
        />


        {/* WEATHER */}

        <Route
          path="/weather"
          element={

            <div className="page">

              <h1>🌦️ Weather</h1>

              <p>
                Search for a city to get real-time weather
                information.
              </p>

              <SearchBar
                city={city}
                setCity={setCity}
                searchWeather={searchWeather}
              />

              {loading && (
                <p>⏳ Loading weather information...</p>
              )}

              {error && (
                <p className="error">
                  ❌ {error}
                </p>
              )}

              {weather && (
                <>
                  <WeatherCard weather={weather} />

                  <TravelSuggestion
                    weather={weather}
                  />

                  <Forecast
                    forecast={forecast}
                  />
                </>
              )}

            </div>

          }
        />


        {/* TRAVEL */}

        <Route
          path="/travel"
          element={

            <div className="page">

              <h1>✈️ Travel Destinations</h1>

              <p>
                Explore some amazing places for your next
                adventure.
              </p>

              <TravelCard
                place="Goa"
                description="Relax on beautiful beaches and enjoy the coastal atmosphere."
                temperature="29°C"
              />

              <TravelCard
                place="Ooty"
                description="Enjoy cool weather, green hills and peaceful surroundings."
                temperature="21°C"
              />

              <TravelCard
                place="Jaipur"
                description="Explore magnificent forts, palaces and colorful markets."
                temperature="28°C"
              />

            </div>

          }
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={

            <div className="page">

              <h1>🌍 About Smart Travel</h1>

              <div className="card">

                <h2>Travel Made Easier</h2>

                <p>
                  Planning a trip becomes easier when you
                  know what to expect at your destination.
                </p>

                <p>
                  Check weather conditions, explore
                  destinations and make better travel
                  decisions before your journey.
                </p>

              </div>

              <div className="card">

                <h2>✨ Discover More</h2>

                <p>
                  Discover beaches, hill stations,
                  historic cities and exciting destinations.
                </p>

                <Link to="/travel">
                  <button>Explore Destinations</button>
                </Link>

              </div>

            </div>

          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;