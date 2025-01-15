import React from "react";
import "./App.css";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

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

  useLayoutEffect(() => { //loads after the dom is done loading, would be great for codered hackathon components if we have a lot of random 3d 
    //BRO PLEASEEEE WATYCH A TUTORIAL ON THIS I NEED MORE
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline() // gsap timeline simplifies sequences for animations
      t1.from("#intro-slider", {
         yPercent: "-100", 
         duration: 0.8,
         delay:1.0,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger:1.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay:0.3,
        stagger: 0.5,
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
        <div className="role" id="title-1">Software Engineer</div>
        <div className="role" id="title-2">Software Engineer</div>
        <div className="role" id="title-3">Software Engineer</div>
      </div>
      <div className="App" id="app">
        <Navbar />
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