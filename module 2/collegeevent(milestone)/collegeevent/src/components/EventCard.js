import React from "react";

function EventCard({ title, date, venue, description }) {
  return (
    <div className="event-card">
      <h2>{title}</h2>

      <p>
        <b>Date:</b> {date}
      </p>

      <p>
        <b>Venue:</b> {venue}
      </p>

      <p>{description}</p>

      <button>Register</button>
    </div>
  );
}

export default EventCard;