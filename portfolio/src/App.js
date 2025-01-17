import React from "react";
import "./App.css";
import { useLayoutEffect, useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollSection from "./components/ScrollSection"

import Certs from "./components/Certs";
import Education from "./components/Education";

//import Experience from "./components/Experience";
import Footer from "./components/Footer"
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
         duration: 0.1,
         delay:0.1,
      }).from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
        opacity: 0,
        y: "+=30",
        stagger:0.1,
      }).to(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
        opacity: 0,
        y: "-=30",
        delay:0.1,
        stagger: 0.1,
      }).to("#intro-slider", {
        yPercent: "-100",
        duration: 0.1,
      }).from("#app", {
        opacity:1,
        duration: 0.1,
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
        <ScrollSection/>
        {/* <section> */}
          <Education />
          <Certs />
          <Projects />
          <Footer />
        {/* </section> */}
      </div>
    </div>
  );
};

export default App;

