import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>🌤️ Smart Weather</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;