import React from "react";
import "./Home.css";
import templeBg from "../assets/PHOTO-2025-08-09-10-50-34.jpg"; // <-- Your image

const Home = () => {
  return (
    <section className="home" style={{ backgroundImage: `url(${templeBg})` }}>
      <div className="hero-content">
        <h1>Welcome to Our Temple</h1>
        <p>
          Experience the spiritual serenity, rituals, and traditions that bring peace to your soul.
        </p>
        <a href="#events" className="hero-btn">Explore Events</a>
      </div>
    </section>
  );
};

export default Home;
