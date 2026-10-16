import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to College Event Portal</h1>

      <p>
        Discover exciting events, workshops, competitions and
        activities happening in our college.
      </p>

      <button onClick={() => navigate("/events")}>
        Explore Events
      </button>
    </div>
  );
}

export default Home;