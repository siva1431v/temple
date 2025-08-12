import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>About Us</h2>
      <p>
        Our temple is a place of devotion, culture, and community. We host
        various spiritual and cultural programs throughout the year.
      </p>
    </motion.section>
  );
}
