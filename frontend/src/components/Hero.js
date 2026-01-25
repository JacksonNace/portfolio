import React from 'react';
import './Hero.css'; 
import { TextFade } from './TextFade'; 
import HeroShapes from "./HeroShapes"

const Hero = () => {
  return (
<section id="home" className="hero">
  {/* Animated shapes in the background */}
  <HeroShapes />

  {/* Floating auras */}
  <div className="aura"></div>
  <div className="aura"></div>
  <div className="aura"></div>

  {/* Hero text */}
  <div className="hero__content">
    <h4 className="name">
      <span className="stagger">
        {"Jackson Nace".split("").map((char, i) => (
          <span key={i} style={{ transitionDelay: `${i * 60}ms` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
  
    </h4>
    <p>
      Studying computer science with a minor in math @{" "}
      <a href="https://uh.edu/" target="_blank" rel="noopener noreferrer">
        University of Houston
      </a>
    </p>
  </div>

  <div className="hero-bottom-fade"></div>
</section>

  );
};

export default Hero;
