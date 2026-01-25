import React from "react";
import Hero from "../components/Hero";
import About from "../components/About"
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "./Home.css"



function Home() {
  return (
    <div className="app-container">
      <div id="intro-slider-black" className="intro-black"> </div>
      <div id="intro-slider-darkgreen" className="intro-darkgreen"> </div>
      <div id="intro-slider-navyblue" className="intro-navyblue"> </div>
      <div id="intro-slider-creme" className="intro-creme"> </div>
      <div className="App" id="app">
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
