import React from "react";

import About from "./components/About";
import Certs from "./components/Certs";
import Education from "./components/Education";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Certs />
      <Projects />
    </div>
  );
}

export default App;