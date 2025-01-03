import React from "react";
import About from "./components/About";
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
      <Projects />
    </div>
  );
}

export default App;