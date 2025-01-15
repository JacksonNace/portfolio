import React from "react";
import "./App.css";

import About from "./components/About";
import Certs from "./components/Certs";
import Education from "./components/Education";


import Experience from "./components/Experience";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <div className="Intro">
        <div>Software Engineer</div>
        <div>Student</div>
        <div>Software Engineer</div>
      </div>
      <div className="App">
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certs />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;