import React from 'react';
import './Hero.css'; 
import { TextFade } from './TextFade'; 

const Hero = () => {
  return (
    <section className="hero">
      <TextFade direction="up" className="hero__content">
        <h4>Hey, I’m Jackson!</h4>
        <p>
        Studying computer science with <br/>a minor in math @ the <span className="highlight">University of Houston</span>.
        </p>
        <p>IT Intern @ <span className="highlight"> Derrick Corporation</span></p>
      </TextFade>

      <img
        src="images/hero.png"  // Use the imported image here
        alt="jackson n monkeys"
        className="hero__image"
      />
      <div className="visitor-counter">
        <h2>Visitor Counter</h2>
        {/* <p>Number of visitors: {visitorCount}</p> */}
      </div>
    </section>
  );
};

export default Hero;
