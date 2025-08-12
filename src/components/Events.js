import React from "react";
import { motion } from "framer-motion";

export default function Events() {
  const eventList = [
    "🪔 Vinayagar Chaturthi – Sept 15",
    "🎶 Bhajan Night – Oct 5",
    "🙏 Annadhanam – Every Saturday"
  ];

  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {eventList.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            {event}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
