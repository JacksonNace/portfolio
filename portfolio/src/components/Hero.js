import React from 'react';
import './Hero.css'; 
import { TextFade } from './TextFade'; 

const Hero = () => {  
  return (
    <section className="hero">
      <TextFade direction="up" className="hero-container">
        <div className="hero-text">
          <h1>Hey, I'm Jackson!</h1>
          <p>Studying computer science with a minor in math @ the University of Houston.</p>
          <h3>IT Intern @ Derrick Corporation</h3>
          <img src="images/hero.gif" alt="Hero animation" className="hero-gif" />
        </div>
        <div className="hero-image-container"></div>
      </TextFade>
      
      <div className="visitor-counter">
        <h2>Visitor Counter</h2>
        {/* <p>Number of visitors: {visitorCount}</p> */}
      </div>
    </section>
  );
};

export default Hero;

