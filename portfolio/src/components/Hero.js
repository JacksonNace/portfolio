import React from 'react';
import './Hero.css'; 

const Hero = () => {  
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hey, I'm Jackson!</h1>
          <p>Studying computer science with a minor in math @ the University of Houston.</p>
          <h3>IT Student Assistant @ University of Houston</h3>
        </div>
          <div className='hero-image-container'>
          </div>
      </div>
        <div className="visitor-counter">
          <h2>Visitor Counter</h2>
          {/* <p>Number of visitors: {visitorCount}</p> */}
        </div>
    </section>
  );
};

export default Hero;
