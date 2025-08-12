import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p>📍 Temple Street, Tamil Nadu</p>
      <p>📞 +91 98765 43210</p>
      <p>© 2025 Sri Anantha Vinayagar Temple</p>
    </motion.footer>
  );
}
