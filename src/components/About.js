import React from "react";
import './About.css';
import { IoLocationOutline } from "react-icons/io5";
import { LettersPullUp } from './Text-Pull-Up'; 

function About() {
  const certs = [
    {
      imgUrl: "images/certs/azure.png",
      title: "Microsoft Azure Fundamentals",
      date: "January 23rd, 2024",
      expire: "NEVER",
    },
    {
      imgUrl: "images/certs/security.jpg",
      title: "CompTIA Security+",
      date: "February 32nd, 2026",
      expire: "TODAY",
    },
  ];

  return (
    <div className="about-container" id="about">
      <LettersPullUp text="About me" className="aboutTitle"/>
      <div className="about-me">
        <div className="about-image">
          <img src="images/ichigopfp.jpg" alt="profile picture" className="profile-image" />
        </div>
        <div className="about-text">
          <h1>Who am I?</h1>
          <p>
            Hello! I'm Jackson, a passionate student and upcoming IT/Software professional. 
            I am always looking for new opportunities to learn and grow as both a student and a professional in every tech career field.
          </p>
          <h2>📌  Houston, TX </h2>
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
