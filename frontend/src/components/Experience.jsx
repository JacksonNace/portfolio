import React from 'react';
import './Experience.css';
import { TextFade } from './TextFade';

function Experience() {
  const experiences = [
    {
      company: "Halliburton",
      jobTitle: "Cloud Intern",
      date: "May 2026 - August 2026",
      imageUrl: "images/experience/halliburton.svg",
      linkUrl: "https://www.halliburton.com/",
      iconUrl: "images/icons/gas.png",
      details: [
        {
          list: [
            "Automated Azure infrastructure deployment using Terraform (App Service, Functions, Key Vault, VNet), securing CI/CD via GitHub Actions OIDC and Managed Identities to eliminate stored credentials.",
            "Built an automated ingestion pipeline using a GitHub App and Azure Function webhooks to sync markdown documentation across private repos and index 70+ internal skills into Azure AI Search.",
            "Developed 75% of the web UI (HTML/CSS/JS), integrated an Azure OpenAI assistant widget, and built client-side search debouncing to reduce backend API calls by 90%.",
          ],
        },
      ],
    },
    {
      company: "Derrick Corporation",
      jobTitle: "IT & Automation Intern",
      date: "March 2025 - January 2026",
      imageUrl: "images/experience/derrick.png",
      linkUrl: "https://derrick.com/",
      iconUrl: "images/icons/gas.png",
      details: [
        {
          list: [
            "Streamlined 40+ enterprise workflows using Power Automate Solutions with custom error-handling and data validation, securing 99% operational accuracy across $20,000 in inventory.",
            "Configured a 60TB Linux-based NAS in a RAID 5 array via Docker containers, managing scheduled media backups and ensuring 100% data redundancy for global company assets.",
            "Engineered an automated document generation pipeline replacing a legacy SaaS, dynamically populating Word templates from Dataverse, converting to PDF, and managing temporary file cleanup.",
          ],
        },
      ],
    },
    {
      company: "UH School of Nursing",
      jobTitle: "IT Student Assistant",
      date: "August 2024 - February 2025",
      imageUrl: "images/experience/UH.png",
      iconUrl: "images/icons/nursing.png",
      linkUrl: "https://uh.edu/nursing/",
      details: [
        {
          list: [
            "Administered IT support for 130+ faculty and students, managing Active Directory account provisioning, device re-imaging, and hardware diagnostics.",
          ],
        },
      ],
    },
    {
      company: "Lavner Education",
      jobTitle: "Computer Science Instructor",
      date: "May 2024 - August 2024",
      imageUrl: "images/experience/Lavner.webp",
      iconUrl: "images/icons/pencil.png",
      linkUrl: "https://www.lavnercampsandprograms.com/",
      details: [
        {
          list: [
            "Instructed 200+ students across weekly cohorts of up to 25 in C++, Python, Intro to AI, and Robotics fundamentals.",
          ],
        },
      ],
    },
    {
      company: "Coder Kids",
      jobTitle: "Computer Science Instructor Intern",
      date: "August 2023 - August 2024",
      imageUrl: "images/experience/CoderKids.png",
      linkUrl: "https://www.coderkids.com/",
      iconUrl: "images/icons/game.png",
      details: [
        {
          list: [
            "Mentored 150+ students aged 8–16 through individualized coding lessons, adapting curriculum to varied skill levels.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <div className="experience-container">
          {experiences.map((experience, index) => (
            <div className="experience-box expanded" key={index}>
              <div className="header-container">
                <div className="image-container">
                  <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer">
                    <img className="experience-image" src={experience.imageUrl} alt={experience.company} />
                  </a>
                </div>

                <div className="text-area">
                  <TextFade direction="up">
                    <h3 className="experience-company">
                      <a href={experience.linkUrl} target="_blank" rel="noopener noreferrer">
                        {experience.company}
                      </a>
                    </h3>
                    <h4 className="experience-jobTitle">{experience.jobTitle}</h4>
                    <p className="experience-date">{experience.date}</p>
                  </TextFade>
                </div>

                <div className="icon-date-container">
                  <img
                    className="experience-icon"
                    src={experience.iconUrl}
                    alt="icon"
                  />
                </div>
              </div>

              <div className="experience-bullets">
                {experience.details.map((section, i) => (
                  <div key={i}>
                    {section.title && <p className="bullet-title">{section.title}</p>}
                    <ul className="sub-bullets">
                      {section.list.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;