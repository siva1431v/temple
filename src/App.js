import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import About from "./components/About";
import Events from "./components/Events";
import Timings from "./components/Timings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Timings />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
