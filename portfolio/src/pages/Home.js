import React from "react";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import Hero from "../components/Hero";
import About from "../components/About"
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "./Home.css"

//SHELVED
//import ScrollSection from "./components/ScrollSection"
// import About from "./components/About";

//.from() - opacity from->current 
//.to() - opacity current->to


function Home() {

  // const comp = useRef(null)
  // //intro

  
  // useLayoutEffect(() => { //loads after the dom is done loading
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline() // gsap timeline simplifies sequences for animations
  //     t1.from("#intro-slider", {
  //        yPercent: "-100", 
  //        duration: 0.5,
  //        delay:0.4,
  //        paused:false,
  //     }).to("#intro-slider", {
  //       yPercent: "-100",
  //       duration: 0.6,
  //     }).from("#app", {
  //       opacity:1,
  //       duration: 0.4,
  //     })
  //   }, comp)
  //   return () => ctx.revert() // prevents memory leak with the library
  // }, []) 


  return (
    // <div className="app-container" ref={comp}>
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
        <Education />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
