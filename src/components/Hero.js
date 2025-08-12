import React from "react";
import { motion } from "framer-motion";
import templeBg from "../assets/PHOTO-2025-08-09-10-50-34.jpg"; // place your image in src/assets

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${templeBg})`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-overlay">
        <h2>Welcome to Sri Angalamman Koil</h2>
        <p>Experience peace and spirituality in every moment.</p>

        <div className="floating-diya">🪔</div>
        <div className="floating-diya" style={{ left: "80%" }}>🪔</div>
      </div>
    </motion.section>
  );
}
