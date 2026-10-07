import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <p>Email: events@college.com</p>
      <p>Phone: +91 98765 43210</p>

      <input type="text" placeholder="Enter your name" />
      <br /><br />

      <input type="email" placeholder="Enter your email" />
      <br /><br />

      <button>Send Message</button>
    </div>
  );
}

export default Contact;