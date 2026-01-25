import React from "react";
import './About.css';
import { LettersPullUp } from './Text-Pull-Up'; 

function About() {
  const certs = [
    {
      imgUrl: "images/certs/azuredeveloper.png",
      title: "Microsoft Azure Developer Associate",
      date: "January 25, 2026",
      expire: "January 25, 2027",
    },
    {
      imgUrl: "images/certs/security.png",
      title: "CompTIA Security+",
      date: "August 26, 2025",
      expire: "August 26, 2028",
    },
    {
      imgUrl: "images/certs/azurefund.png",
      title: "Microsoft Azure Fundamentals",
      date: "January 23rd, 2024",
      expire: "NEVER",
    },
  ];

  return (
    <div className="about-container" id="about">
      <LettersPullUp text="About me" className="aboutTitle"/>
      <div className="about-me">
        <div className="about-image">
          <img src="images/myphotoselfie.jpg" alt="profile picture" className="profile-image" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Jackson. I thrive on a good challenge.
            I am always looking for new opportunities to learn and grow as both a student and a professional in every tech career field.
            I come with experience in Linux, cloud, server management, and have a solid understanding on data handling.
          </p>
          <div className='certifications'>
            <h1 className='cert-title'>Certifications</h1>
            <div className='cert-container'>
              {certs.map((cert, index) => (
                <div className='cert-box' key={index}>
                  <img src={cert.imgUrl} alt='Reload these images!!!'/>
                  <h3>{cert.title}</h3>
                </div>
              ))}
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default About;
