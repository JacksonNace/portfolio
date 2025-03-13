import React, { useState } from 'react';
import './Experience.css';
import { TextFade } from './TextFade'; 

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Set default to 0 (Derrick Corporation)

  const experiences = [
    {
      company: "Derrick Corporation",
      jobTitle: "IT Intern",
      date: "March 2025 - Present",
      imageUrl: "images/experience/derrick.png",
      linkUrl: "https://derrick.com/",
      iconUrl: "images/icons/Gas.png", // Add custom icon URL
      details: [
        "In Progress!",
      ]
    },
    {
      company: "University of Houston",
      jobTitle: "IT Assistant",
      date: "August 2024 - March 2025",
      imageUrl: "images/experience/UH.png",
      iconUrl: "images/icons/nursing.png", // Add custom icon URL
      linkUrl: "https://uh.edu/nursing/",
      details: [
        "Troubleshot and resolved issues during the department's upgrade via re-imaging from Windows 10 to Windows 11.",
        "Installed and configured devices, strengthening skills in re-imaging, Active Directory, and BIOS troubleshooting.",
        "Utilized Excel to manage and maintain an inventory of 110+ devices, including Computers, Simulation Robots, iPads, Cameras and Printers ensuring accurate tracking and updates."
      ]
    },
    {
      company: "CodeRED",
      jobTitle: "Software Engineer Lead",
      date: "March 2024 - February 2025",
      imageUrl: "images/experience/CodeRED2.jpg",
      iconUrl: "images/icons/star.png", // Add custom icon URL
      linkUrl: "https://uhcode.red/",
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
      linkUrl: "https://www.lavnercampsandprograms.com/",
      details: [
        "Independently led classes of up to 25 students in topics like High School C++, Python, Intro to AI, and multiple variations of Robotics classes. Ended my internship teaching over 200+ students.",
        "Successfully taught over 200+ students, effectively communicated to students with diverse technical backgrounds."
      ]
    }
    ,
    {
      company: "Coder Kids",
      jobTitle: "Programming Tutor",
      date: "August 2023 - March 2024",
      imageUrl: "images/experience/CoderKids.png",
      linkUrl: "https://www.coderkids.com/",
      iconUrl: "images/icons/game.png", // Add custom icon URL
      details: [
        "Conducted 150+ personalized lessons for students aged 8-16, focusing on enhancing their programming skills.",
        "Adapted teaching to accommodate varied learning paces, boosting students’ confidence and problem-solving abilities."
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
              {experience.linkUrl ? (
            <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                className="experience-image"
                src={experience.imageUrl}
                alt={`${experience.company} logo`}
              />
            </a>
          ) : (
            <img
              className="experience-image"
              src={experience.imageUrl}
              alt={`${experience.company} logo`}
            />
          )}

                        </div>
            
                        <div className="text-area">
                          <TextFade direction="up">
                          <h3 className="experience-company">
              {experience.linkUrl ? (
                <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
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
