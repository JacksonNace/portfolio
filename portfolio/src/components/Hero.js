import React from 'react';
import './Hero.css'; 
import me from '../images/ichigopfp.jpg';
import GithubImage from '../images/socials/Github.svg'; 
import LinkedinImage from '../images/socials/LinkedIn.png';

import Skills from "./Skills";
import "./Skills.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hey, I'm Jackson!</h1>
          <p>Studying computer science with a minor in math @ the University of Houston.</p>
          <h3>Working @ University of Houston</h3>
          <h3>Developing solutions 4 hackathons @ CodeRED</h3>
        </div>
        <div className="hero-image">
          <img src={me} alt="profile picture" />
        </div>
        <div className="hero-socials">
          <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
            <img src={GithubImage} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinImage} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="skills-container">
        <Skills />
      </div>
    </section>
  );
};

export default Hero;
