import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 7,
      title: "Cloud Security Hardening",
      imageUrl: "images/projects/Fortress.jpg",
      technologies: ["AWS"],
      description: [
        "yeppers",
        " cloud resume challenge.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/LoadBalancer" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 8,
      title: "Intrusion Detection Machine Learning Model",
      imageUrl: "images/projects/ML.png",
      technologies: ["C++"],
      description: [
        "yeppers",
        " cloud resume challenge.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/LoadBalancer" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 9,
      title: "DIY Secure Network Load Balancer",
      imageUrl: "images/projects/Network.png",
      technologies: ["C++"],
      description: [
        "yeppers",
        " cloud resume challenge.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/LoadBalancer" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 10,
      title: "Portfolio Website",
      imageUrl: "www.google.com",
      technologies: ["React, JavaScript, Azure Function, CosmosDB"],
      description: [
        "yeppers",
        " cloud resume challenge.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 13,
      title: "Mockey Interview - HackTX 2024",
      imageUrl: "images/projects/MockeyInterview.jpg",
      technologies: ["PostgreSQL", "NodeJS", "NextJS"],
      description: [
        "Built a mock interview platform for HackTX 2024.",
        "Engineered a mock interview game with Next.js and PostgreSQL, securing player data with password hashing and JWT - Hosted using Neon.",
        "Integrated Claude AI as a virtual interviewer, offering real-time prompts and feedback on data structure tasks.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/MockeyInterview-HackTX" },
      ],
    },
    {
      id: 14,
      title: "MarketMentor - HackRice 2024",
      imageUrl: "images/projects/MarketMentor.jpg",
      technologies: ["React", "CSS", "HTML"],
      description: [
        "Created a website to trade stocks with fake cash, connecting to the Llama API and displaying graphs.",
        "Developed and integrated the Google Gemini API, enabling seamless data retrieval and enhancing app functionality.",
        "Leveraged Postman to troubleshoot 7 API calls, ensuring smooth interaction between the frontend and backend",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/MarketMentor-HackRice" },
        { type: "youtube", link: "https://www.youtube.com/watch?v=yuofK7RWgjU" },
      ],
    },
    {
      id: 15,
      title: "Bleach RPG",
      imageUrl: "images/projects/BleachRPG.jpg",
      technologies: ["C++"],
      description: [
        "Created a turn-based battle system inspired by Bleach, with mechanics using inheritance and polymorphism.",
        "Developed a save/load system with file handling to ensure seamless continuation of gameplay sessions",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/BleachRPG" },
        { type: "youtube", link: "https://www.youtube.com/watch?v=ex_-Qy1oqus&t=2s" },
      ],
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-card ${index % 2 === 0 ? "left-image" : "right-image"}`}
        >
          <div className="project-image-container">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            <ul className="project-description">
              {project.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <div className="social-links">
              {project.social &&
                project.social.map((item, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${item.type}`}
                  >
                    {item.type === "github" && (
                      <img src="images/socials/Github.svg" alt="GitHub Link" />
                    )}
                    {item.type === "youtube" && (
                      <img src="images/socials/Youtube.png" alt="YouTube Link" />
                    )}
                  </a>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
