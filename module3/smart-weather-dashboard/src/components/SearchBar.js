import React from "react";

function SearchBar({ city, setCity, searchWeather }) {
  return (
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
  );
}

export default SearchBar;