import React from "react";

function TravelCard({ place, description, temperature }) {
  return (
    <div className="card">
      <h2>📍 {place}</h2>

      <p>{description}</p>

      <h3>🌡️ {temperature}</h3>

      <button>Explore</button>
    </div>
  );
}

export default TravelCard;