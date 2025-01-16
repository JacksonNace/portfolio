import React from "react";
import "./App.css";
import { useLayoutEffect, useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollSection from "gsap/ScrollTrigger"

import About from "./components/About";
import Certs from "./components/Certs";
import Education from "./components/Education";

import Experience from "./components/Experience";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";



//.from() - opacity from->current 
//.to() - opacity current->to


function App() {

  const comp = useRef(null)
  //intro
  useLayoutEffect(() => { //loads after the dom is done loading, would be great for codered hackathon components if we have a lot of random 3d 
    //BRO PLEASEEEE WATYCH A TUTORIAL ON THIS I NEED MORE
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline() // gsap timeline simplifies sequences for animations
      t1.from("#intro-slider", {
        //  yPercent: "-100", 
         duration: 0.8,
         delay:0.5,
      }).from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
        opacity: 0,
        y: "+=30",
        stagger:0.6,
      }).to(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
        opacity: 0,
        y: "-=30",
        delay:0.4,
        stagger: 0.15,
      }).to("#intro-slider", {
        yPercent: "-100",
        duration: 0.5,
      }).from("#app", {
        opacity:1,
        duration: 1.2,
      })
    }, comp)
    return () => ctx.revert() // prevents memory leak with the library
  }, []) 


  return (
    <div className="app-container" ref={comp}>
      <div 
        id="intro-slider"
        className="Intro"
      >
        <div className="role" id="title-1">Goal-Oriented</div>
        <div className="role" id="title-2">Problem-Solver</div>
        <div className="role" id="title-3">Determined</div>
        <div className="role" id="title-4">CS Student at the University of Houston</div>
        <div className="role" id="title-5">Jackson Nace</div>
      </div>
      <div className="App" id="app">
        <Navbar />
        <Hero />
        <About />
        <ScrollSection/>
        <Experience />
        <Education />
        <Certs />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;

