
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: "Derrick Corporation",
      jobTitle: "IT Intern",
      date: "March 2025 - Present",
      imageUrl: "images/experience/UH.png"
    },
    {
      company: "University of Houston",
      jobTitle: "IT Assistant",
      date: "August 2024 - March 2025",
      imageUrl: "images/experience/UH.png"
    },
    {
      company: "CodeRED",
      jobTitle: "Software Engineer Lead",
      date: "March 2024 - February 2025",
      imageUrl: "images/experience/CodeRED2.jpg"
    },
    {
      company: "Lavner Education",
      jobTitle: "Computer Science Intern",
      date: "May 2024 - August 2024",
      imageUrl: "images/experience/Lavner.webp"
    },
    {
      company: "Coder Kids",
      jobTitle: "Programming Tutor",
      date: "August 2023 - March 2024",
      imageUrl: "images/experience/CoderKids.png"
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <div className="experience-container">
          {experiences.map((experience, index) => (
            <div className="experience-box" key={index}>
              <div className="image-container">
                <img
                  className="experience-image"
                  src={experience.imageUrl}
                  alt={`${experience.company} logo`}
                />
              </div>

              <div className="text-area">
                <h3 className="experience-company">{experience.company}</h3>
                <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
              </div>

              <p className="experience-date">{experience.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
