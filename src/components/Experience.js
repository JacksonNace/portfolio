import React, { useState } from 'react';
import './Experience.css';
import { TextFade } from './TextFade';

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Set initial state to 0 to open the first item

  const experiences = [
    {
      company: "Derrick Corporation",
      jobTitle: "IT Intern",
      date: "March 2025 - Present",
      imageUrl: "images/experience/derrick.png",
      linkUrl: "https://derrick.com/",
      iconUrl: "images/icons/Gas.png",
      details: [
        {
          title: "Automating Processes & Workflows",
          list: [
            "Designed and implemented 15+ automated workflows using a no-code platform, streamlining business operations for marketing, sales, and HR.",
            "Automated key business processes, including purchase and inspection reminders, safety kit updates, and new employee onboarding, reducing manual effort and improving communication.",
            "Developed a dynamic workflow to automate vehicle value updates from a bid-to-sold process, ensuring real-time data accuracy for sales teams.",
          ],
        },
        {
          title: "Infrastructure & Data Management",
          list: [
            "Configured and deployed a 40TB Network-Attached Storage (NAS) solution, utilizing a RAID 5 configuration to provide 60TB of usable storage for critical business data with fault tolerance.",
            "Engineered the deployment of Immich using Docker on the NAS, establishing a robust, self-hosted photo and video management platform for internal team collaboration and data organization.",
          ],
        },
        {
          title: "Endpoint Management & Security",
          list: [
            "Leading the implementation of Jamf Pro for the entire organization, establishing a centralized solution for automated software deployments, update management, and endpoint security across 300+ devices.",
            "Developed and implemented an automated gate entry and exit system using POST requests on an Apple Shortcut, improving facility access and security.",
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
                    src={experience.iconUrl}
                    alt={`${experience.company} icon`}
                  />
                </div>
              </div>

              {expandedIndex === index && (
                <ul className="experience-bullets">
                  {experience.details.map((section, i) => (
                    <div key={i}>
                      <li className="bullet-title">
                        {section.title}
                      </li>
                      <ul className="sub-bullets">
                        {section.list.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
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