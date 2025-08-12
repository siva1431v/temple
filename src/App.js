import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🌸 Sri Temple</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>🌸 Sri Temple</h1>
        <p>Welcome to our sacred place of peace and devotion</p>
        <a href="#about" className="btn">Learn More</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About the Temple</h2>
        <p>
          Our temple is a serene place of worship and spirituality. It has been serving the community
          for generations, offering a space for prayer, meditation, and cultural celebrations.
        </p>
      </section>

      {/* Events Section */}
      <section className="events" id="events">
        <h2>Events & Timings</h2>
        <div className="event-cards">
          <div className="card">
            <h3>Morning Pooja</h3>
            <p>5:30 AM - 7:00 AM</p>
          </div>
          <div className="card">
            <h3>Evening Aarti</h3>
            <p>6:00 PM - 7:30 PM</p>
          </div>
          <div className="card">
            <h3>Special Fest</h3>
            <p>Every Full Moon Night</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>📍 Temple Street, Tamil Nadu, India</p>
        <p>📞 +91 98765 43210</p>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn">
          View on Map
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Sri Temple. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
