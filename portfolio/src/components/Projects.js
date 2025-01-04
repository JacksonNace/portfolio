import React from "react";
import "./Projects.css";
import GithubLogo from "../images/Github.svg"

function Projects() {

  const projects = [
    {
      id: 7,
      title: "CodeRED 2025",
      imageUrl: "www.google.com", 
      technologies: ["Supabase, NextJS, TailwindCSS, Cloudflare"],
      description: [
        "Lead CodeRED Web dev team to build our main site, linking to all our previous hackathons.",
        " ",
      ],
      githubLink: "https://github.com/JacksonNace/portfolio", // i have a conditional check in the JSX below that checks if the GithubLink is valid
    },
    {
      id: 8,
      title: "CodeRED Discord Bot",
      imageUrl: "www.google.com", 
      technologies: ["Go"],
      description: [
        "Built basic discord bot",
        " ",
      ],
      githubLink: "https://github.com/JacksonNace/portfolio", // i have a conditional check in the JSX below that checks if the GithubLink is valid
    },
    {
      id: 9,
      title: "CodeRED Main Site",
      imageUrl: "www.google.com", 
      technologies: ["NextJS, TailwindCSS"],
      description: [
        "Lead CodeRED Web dev team to build our main site, linking to all our previous hackathons.",
        " ",
      ],
      githubLink: "https://github.com/JacksonNace/portfolio", // i have a conditional check in the JSX below that checks if the GithubLink is valid
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
      githubLink: "https://github.com/JacksonNace/portfolio", // i have a conditional check in the JSX below that checks if the GithubLink is valid
    },
    {
      id: 11,
      title: "CodeRED Astra 2024",
      imageUrl: "www.google.com", 
      technologies: ["React", "JavaScript"],
      description: [
        "Built 8 frontend components in React.",
        "Prepared for CodeRED Astra 2024.",
        "Used libraries like Ant Design.",
      ],
      githubLink: null,
    },
    {
      id: 12,
      title: "Bleach RPG",
      imageUrl: "www.google.com", 
      technologies: ["C++"], 
      description: [
        "Created a turn-based battle system inspired by Bleach, with mechanics using inheritance and polymorphism.",
        "Developed a save/load system with file handling to ensure seamless continuation of gameplay sessions",
      ], 
      githubLink: "https://github.com/JacksonNace/BleachRPG",
    },
    {
      id: 13,
      title: "Mockey Interview - HackTX 2024",
      imageUrl: "www.google.com", 
      technologies: ["PostgreSQL", "NodeJS", "NextJS"],
      description: [
        "Built a mock interview platform for HackTX 2024.",
        "Engineered a mock interview game with Next.js and PostgreSQL, securing player data with password hashing and JWT - Hosted using Neon.",
        "Integrated Claude AI as a virtual interviewer, offering real-time prompts and feedback on data structure tasks.",
      ], 
      githubLink: "https://github.com/JacksonNace/MockeyInterview-HackTX",
    },
    {
      id: 14,
      title: "MarketMentor - HackRice 2024",
      imageUrl: "www.google.com", 
      technologies: ["React", "CSS", "HTML"],
      description: [
        "Created a website to trade stocks with fake cash, connecting to the Llama API and displaying graphs.",
        "Developed and integrated the Google Gemini API, enabling seamless data retrieval and enhancing app functionality.",
        "Leveraged Postman to troubleshoot 7 API calls, ensuring smooth interaction between the frontend and backend",
      ], 
      githubLink: "https://github.com/JacksonNace/MarketMentor-HackRice",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.imageUrl} 
            alt={project.title} 
            className="project-image" 
          />
          <h3 className="project-title">{project.title}</h3>
          <ul className="project-technologies">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li> 
            ))}
          </ul>
          <ul className="project-description">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li> 
            ))}
          </ul>

          <div className="github-logo-container"> {/*conditional github logo*/} 
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} alt="GitHub Logo" className="github-logo" />
              </a>
            )}

          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
