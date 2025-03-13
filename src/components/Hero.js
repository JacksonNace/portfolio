import React from 'react';
import './Hero.css'; 
import { TextFade } from './TextFade'; 

const Hero = () => {
  return (
    <section 
      id="home"  // Added home ID here
      className="hero" 
      style={{ backgroundImage: `url('/images/herobg.png')` }}  // Reference the image directly from public folder
    >
      <TextFade direction="up" className="hero__content">
        <h4>Hey, I’m Jackson!</h4>
        <p>
          Studying computer science with <br/>a minor in math @ <a href="https://uh.edu/" target="_blank" rel="noopener noreferrer">
            <span className="highlight">University of Houston</span>
          </a>
        </p>
        <p>IT Intern @ <a href="https://derrick.com/" target="_blank" rel="noopener noreferrer">
            <span className="highlight">Derrick Corporation</span>
          </a></p>
      </TextFade>
      <div className="visitor-counter">
        {/* <h2>Visitor Counter</h2> */}
        {/* <p>Number of visitors: {visitorCount}</p> */}
      </div>
    </section>
  );
};

export default Hero;
