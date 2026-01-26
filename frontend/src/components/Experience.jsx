import React, { useState } from 'react';
import './Experience.css';
import { TextFade } from './TextFade';

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Derrick Corporation",
      jobTitle: "IT Intern",
      date: "March 2025 - Present",
      imageUrl: "images/experience/derrick.png",
      linkUrl: "https://derrick.com/",
      iconUrl: "images/icons/gas.png",
      details: [
        {
          title: "Automating Processes & Workflows",
          list: [
            "Architected 40+ cross-functional workflows using Power Automate Solutions, implementing centralized error handling and data validation to ensure 99% accuracy across $20,000 of inventory.",
            "Deployed a 60TB Linux-based NAS in a RAID 5 array via Docker, managing containerized media backups and ensuring data redundancy for global organizational assets.",
            "Engineered an automated document generation pipeline to replace a legacy SaaS, implemented logic to dynamically populate Word templates from Dataverse, execute PDF conversions, and manage temporary file cleanup.",
            "Optimized notification systems by refactoring legacy logic into batch-processing flows, reducing organizational noise by 1,000+ emails monthly.",
          ],
        },
      ],
    },
    {
      company: "University of Houston",
      jobTitle: "IT Assistant",
      date: "August 2024 - March 2025",
      imageUrl: "images/experience/UH.png",
      iconUrl: "images/icons/nursing.png",
      linkUrl: "https://uh.edu/nursing/",
      details: [
        {
          title: "Technical Support",
          list: [
            "Troubleshot and resolved issues during the department's upgrade via re-imaging from Windows 10 to Windows 11.",
            "Installed and configured devices, strengthening skills in re-imaging, Active Directory, and BIOS troubleshooting.",
            "Utilized Excel to manage and maintain an inventory of 110+ devices, including Computers, Simulation Robots, iPads, Cameras and Printers ensuring accurate tracking and updates.",
          ],
        },
      ],
    },
    {
      company: "Lavner Education",
      jobTitle: "Computer Science Intern",
      date: "May 2024 - August 2024",
      imageUrl: "images/experience/Lavner.webp",
      iconUrl: "images/icons/pencil.png",
      linkUrl: "https://www.lavnercampsandprograms.com/",
      details: [
        {
          title: "Curriculum & Instruction",
          list: [
            "Independently led classes of up to 25 students in topics like High School C++, Python, Intro to AI, and multiple variations of Robotics classes. Ended my internship teaching over 200+ students.",
            "Successfully taught over 200+ students, effectively communicated to students with diverse technical backgrounds.",
          ],
        },
      ],
    },
    {
      company: "Coder Kids",
      jobTitle: "Programming Tutor",
      date: "August 2023 - March 2024",
      imageUrl: "images/experience/CoderKids.png",
      linkUrl: "https://www.coderkids.com/",
      iconUrl: "images/icons/game.png",
      details: [
        {
          title: "Student Mentorship",
          list: [
            "Conducted 150+ personalized lessons for students aged 8-16, focusing on enhancing their programming skills.",
            "Adapted teaching to accommodate varied learning paces, boosting students’ confidence and problem-solving abilities.",
          ],
        },
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
                  <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <img className="experience-image" src={experience.imageUrl} alt={experience.company} />
                  </a>
                </div>

                <div className="text-area">
                  <TextFade direction="up">
                    <h3 className="experience-company">
                      <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        {experience.company}
                      </a>
                    </h3>
                    <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
                    <p className="experience-date">{experience.date}</p>
                  </TextFade>
                  {expandedIndex !== index && (
                    <span className="experience-hint">Click to expand details</span>
                  )}
                </div>

                <div className="icon-date-container">
                  <img
                    className={`experience-icon ${expandedIndex === index ? 'rotated' : ''}`}
                    src={experience.iconUrl}
                    alt="icon"
                  />
                </div>
              </div>

              {expandedIndex === index && (
                <div className="experience-bullets">
                  {experience.details.map((section, i) => (
                    <div key={i}>
                      <p className="bullet-title">{section.title}</p>
                      <ul className="sub-bullets">
                        {section.list.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;