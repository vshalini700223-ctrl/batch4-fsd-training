import React, { useState } from "react";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const registerEvent = (eventName) => {
    setSelectedEvent(eventName);
  };

  const submitRegistration = (e) => {
    e.preventDefault();

    if (!name || !email || !department || !year) {
      alert("Please fill all the details");
      return;
    }

    alert(
      "Registration Successful!\n\n" +
      "Event: " + selectedEvent + "\n" +
      "Name: " + name
    );

    setSelectedEvent(null);
    setName("");
    setEmail("");
    setDepartment("");
    setYear("");
  };

  return (
    <div className="page">
      <h1>Upcoming Events</h1>

      <div className="events">

        <div className="card">
          <h2>Tech Fest 2026</h2>
          <p>Date: 15 October 2026</p>
          <p>Venue: Main Auditorium</p>

          <button onClick={() => registerEvent("Tech Fest 2026")}>
            Register
          </button>
        </div>

        <div className="card">
          <h2>Cultural Fest</h2>
          <p>Date: 20 October 2026</p>
          <p>Venue: College Ground</p>

          <button onClick={() => registerEvent("Cultural Fest")}>
            Register
          </button>
        </div>

        <div className="card">
          <h2>AI Workshop</h2>
          <p>Date: 25 October 2026</p>
          <p>Venue: Computer Lab</p>

          <button onClick={() => registerEvent("AI Workshop")}>
            Register
          </button>
        </div>

      </div>

      {selectedEvent && (
        <div className="registration-form">

          <h2>Register for {selectedEvent}</h2>

          <form onSubmit={submitRegistration}>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
              type="text"
              placeholder="Enter your department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            <br /><br />

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>

            <br /><br />

            <button type="submit">
              Confirm Registration
            </button>

          </form>

        </div>
      )}
    </div>
  );
}

export default Events;