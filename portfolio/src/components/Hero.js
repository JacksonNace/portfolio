import React, { useEffect, useState } from 'react';
import './Hero.css'; 

import Skills from "./Skills";
import "./Skills.css";

const Hero = () => {  
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className='con'></div>
          <div className="hero-text">
            <h1>Hey, I'm Jackson!</h1>
            <p>Studying computer science with a minor in math @ the University of Houston.</p>
            <h3>Working @ University of Houston</h3>
            <h3>Developing solutions 4 hackathons @ CodeRED</h3>
          </div>
          <div className='hero-image-container'>
            <div className="hero-image">
              <img src="images/ichigopfp.jpg" alt="profile picture" />
            </div>
            <div className="hero-socials">
              <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
                <img src="images/socials/Github.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
                <img src="images/socials/LinkedIn.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
      </div>
        <div className="visitor-counter">
          <h2>Visitor Counter</h2>
          {/* <p>Number of visitors: {visitorCount}</p> */}
        </div>
      <div className="skills-container">
        <Skills />
      </div>
    </section>
  );
};

export default Hero;
