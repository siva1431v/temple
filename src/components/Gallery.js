import React from "react";
import { motion } from "framer-motion";

// Import your images (place them in src/assets)
import img1 from "../assets/PHOTO-2025-08-09-10-50-34.jpg";
// You can add more temple images here

export default function Gallery() {
  const images = [
    { src: img1, alt: "Sri Angalamman Koil" },
    // Add more: { src: img2, alt: "Temple Event" }, etc.
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Temple Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
