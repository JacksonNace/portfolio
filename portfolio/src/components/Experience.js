import React from 'react';
import './Experience.css';

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
      imageUrl: "images/experience/UH.png"
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
      imageUrl: "images/experience/Lavner.webp"
    },
    {
      company: "Coder Kids",
      date: "August 2023 - March 2024",
      jobTitle: "Programming Tutor",
      description: [
        "Conducted 150+ personalized lessons for students aged 8-16.", //every comment or line is used as sentence variable below
        "Effectively planned, organized, and executed lessons in Python, Lua, and Roblox Studio.",
      ],
      imageUrl: "images/experience/CoderKids.png"
    }
  ];

  return (
    <div className="experience-container">
      {experiences.map((experience, index) => (
        <div className="experience-box" key={index}>
          <div className='image-container'>
            <img
              src={experience.imageUrl}
              alt={`${experience.company} logo`}
              className="experience-image"
            />
          </div>
          <h3 className="experience-company">{experience.company}</h3>
          <p className="experience-date">{experience.date}</p>
          <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
          <ul className="experience-description">
            {experience.description.map((sentence, idx) => (
              <li key={idx}>{sentence}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
