import React, { useState } from 'react';
import './Experience.css';
import { TextFade } from './TextFade'; 

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      company: "Derrick Corporation",
      jobTitle: "IT Intern",
      date: "March 2025 - Present",
      imageUrl: "images/experience/derrick.png",
      iconUrl: "images/icons/Gas.png", // Add custom icon URL
      details: [
        "Developed and maintained IT systems",
        "Assisted with troubleshooting hardware and software issues",
        "Collaborated with senior IT staff on network improvements"
      ]
    },
    {
      company: "University of Houston",
      jobTitle: "IT Assistant",
      date: "August 2024 - March 2025",
      imageUrl: "images/experience/UH.png",
      iconUrl: "images/icons/nursing.png", // Add custom icon URL
      details: [
        "Managed student accounts and system configurations",
        "Provided technical support to staff and students"
      ]
    },
    {
      company: "CodeRED",
      jobTitle: "Software Engineer Lead",
      date: "March 2024 - February 2025",
      imageUrl: "images/experience/CodeRED2.jpg",
      iconUrl: "images/icons/star.png", // Add custom icon URL
      details: [
        "Led a team of developers to build and maintain software products",
        "Managed backend architecture and database optimizations"
      ]
    },
    {
      company: "Lavner Education",
      jobTitle: "Computer Science Intern",
      date: "May 2024 - August 2024",
      imageUrl: "images/experience/Lavner.webp",
      iconUrl: "images/icons/pencil.png", // Add custom icon URL
      details: [
        "Assisted in teaching coding concepts to young students",
        "Created educational resources and online content"
      ]
    },
    {
      company: "Coder Kids",
      jobTitle: "Programming Tutor",
      date: "August 2023 - March 2024",
      imageUrl: "images/experience/CoderKids.png",
      iconUrl: "images/icons/game.png", // Add custom icon URL
      details: [
        "Tutored students in Python and Java programming",
        "Assisted with creating lesson plans and coding exercises"
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expansion
  };

  return (
    <section className="experience-section" id="experience">
    <h2 className="section-title">Experience</h2>
    
    <div className="experience-card">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div
            className={`experience-box ${expandedIndex === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <div className="header-container">
              <div className="image-container">
                <img
                  className="experience-image"
                  src={experience.imageUrl}
                  alt={`${experience.company} logo`}
                />
              </div>
  
              <div className="text-area">
                <TextFade direction="up">
                  <h3 className="experience-company">{experience.company}</h3>
                </TextFade>
                <TextFade direction="up">
                  <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
                </TextFade>
                <TextFade direction="up">
                  <p className="experience-date">{experience.date}</p>
                </TextFade>
              </div>
  
              <div className="icon-date-container">
                <img
                  className={`experience-icon ${expandedIndex === index ? 'rotated' : ''}`}
                  src={experience.iconUrl} // Custom Icon
                  alt={`${experience.company} icon`}
                />
              </div>
            </div>
  
            {expandedIndex === index && (
              <ul className="experience-bullets">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Experience;
