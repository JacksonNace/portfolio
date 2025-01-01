import React from 'react';
import './Hero.css'; 
import me from '../images/ichigopfp.jpg';
import GithubImage from '../images/Github.svg'; 
import LinkedinImage from '../images/LinkedIn.png';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Jackson. I am a student djeowfjoijweifkepqwjdqpiwjepowjpejpjr</p>
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
    </section>
  );
};

export default Hero;