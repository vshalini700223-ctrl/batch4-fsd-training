import React from "react";

function TravelSuggestion({ weather }) {

  if (!weather) {
    return null;
  }

  const condition = weather.weather[0].main;

  let suggestion = "";

  if (condition === "Clear") {
    suggestion =
      "☀️ Great weather! Beaches, sightseeing and outdoor activities are a good choice.";
  }
  else if (condition === "Clouds") {
    suggestion =
      "☁️ Pleasant weather! You can explore parks, markets and tourist attractions.";
  }
  else if (condition === "Rain") {
    suggestion =
      "🌧️ Rainy weather! Consider museums, shopping malls and indoor attractions.";
  }
  else if (condition === "Thunderstorm") {
    suggestion =
      "⛈️ Stormy weather! It is better to choose indoor activities and avoid outdoor travel.";
  }
  else if (condition === "Snow") {
    suggestion =
      "❄️ Snowy weather! Enjoy winter activities and make sure to dress warmly.";
  }
  else {
    suggestion =
      "🌤️ Check the local conditions and choose activities that suit the weather.";
  }

  return (
    <div className="card">

      <h2>✈️ Travel Suggestion</h2>

      <p>{suggestion}</p>

    </div>
  );
}

export default TravelSuggestion;