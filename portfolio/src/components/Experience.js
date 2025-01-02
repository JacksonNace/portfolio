import React from 'react';
import './Experience.css';
import UHLogo from '../images/UH.png';
import LavnerLogo from '../images/Lavner.webp';
import CoderKidsLogo from '../images/CoderKids.png';

function Experience() {
  const experiences = [
    {
      company: "University of Houston",
      date: "August 2024 - Present",
      jobTitle: "IT Helpdesk",
      description: [
        "Assisted with the department’s upgrade from Windows 10 to Windows 11 via re-imaging.",
        "Installed new technology and learned foundational skills in re-imaging, Active Directory, diagnostics, and BIOS.",
        "Utilized Excel to manage and maintain an inventory of 110+ devices, including Computers, Simulation Robots, iPads, Cameras, and Printers ensuring optimal performance and timely updates."
      ],
      imageUrl: UHLogo
    },
    {
      company: "Lavner Education",
      date: "May 2024 - August 2024",
      jobTitle: "Computer Science Instructor Intern",
      description: [
        "Selected in a 3% application process to intern with the Lavner team at Rice University.",
        "Independently led classes of up to 25 students in topics like High School C++, Python, Intro to AI, and multiple variations of Robotics classes.",
        "Ended my internship teaching over 200+ students."
      ],
      imageUrl: LavnerLogo
    },
    {
      company: "Coder Kids",
      date: "August 2023 - March 2024",
      jobTitle: "Programming Tutor",
      description: [
        "Conducted 150+ personalized lessons for students aged 8-16.",
        "Effectively planned, organized, and executed lessons in Python and Lua.",
      ],
      imageUrl: CoderKidsLogo
    }
  ];

  return (
    <div className="experience-container">
      {experiences.map((experience, index) => (
        <div className="experience-box" key={index}>
          <img
            src={experience.imageUrl}
            alt={`${experience.company} logo`}
            className="experience-image"
          />
          <h3 className="experience-company">{experience.company}</h3>
          <p className="experience-date">{experience.date}</p>
          <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
          <ul className="experience-description">
            {experience.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
