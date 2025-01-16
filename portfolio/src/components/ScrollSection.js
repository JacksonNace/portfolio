import React from "react";
import "./App.css";
import { useLayoutEffect, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import About from "./components/About";
import Certs from "./components/Certs";
import Education from "./components/Education";

import Experience from "./components/Experience";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function ScrollSection() {
  // horizontal scrolling function
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  function ScrollSection() {
  
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        {/* A return function for killing the animation on component unmount */ }
        pin.kill();
      };
    }, []);
  }

  return (
    <section>
      <div className="App" id="app" ref ={triggerRef}>
        <div className="horizontal-scroll" ref={sectionRef}>
          <Hero />
          <About />
          <div className="vertical-scroll" id="vertical-scroll">
            <Experience />
            <Education />
            <Certs />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
