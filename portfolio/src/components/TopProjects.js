import React from "react";
import "./TopProjects.css";

function TopProjects() {

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
      social: [
        // { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
      
      // githubLink: "https://github.com/JacksonNace/portfolio", // i have a conditional check in the JSX below that checks if the GithubLink is valid
    },
    {
      id: 8,
      title: "CodeRED Discord Bot",
      imageUrl: "images/projects/Discord.jpg", 
      technologies: ["Go"],
      description: [
        "Built basic discord bot",
        " ",
      ],
      social: [
        // { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
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
      social: [
        // { type: "github", link: "https://github.com/JacksonNace/portfolio" },
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
      id: 11,
      title: "CodeRED Astra 2024",
      imageUrl: "images/projects/Astra.png", 
      technologies: ["React", "JavaScript"],
      description: [
        "Built 8 frontend components in React.",
        "Prepared for CodeRED Astra 2024.",
        "Used libraries like Ant Design.",
      ],
      social: [
        // { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 12,
      title: "Bleach RPG",
      imageUrl: "images/projects/BleachRPG.jpg", 
      technologies: ["C++"], 
      description: [
        "Created a turn-based battle system inspired by Bleach, with mechanics using inheritance and polymorphism.",
        "Developed a save/load system with file handling to ensure seamless continuation of gameplay sessions",
      ], 
      social: [
        { type: "github", link: "https://github.com/JacksonNace/BleachRPG" },
        { type: "youtube", link: "https://www.youtube.com/watch?v=ex_-Qy1oqus&t=2s" }
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
        { type: "youtube", link: "https://www.youtube.com/watch?v=yuofK7RWgjU" }
      ],
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
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

          {/* <div className="github-logo-container"> {/*conditional github logo*/} 
            {/* {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} alt="GitHub Logo" className="github-logo" />
              </a>
            )}
          </div> */}
          <div className="social-links">
            {project.social && project.social.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${item.type}`}
              >
                {item.type === "github" && <img src="images/socials/Github.svg" alt="GitHub Link" />}
                {item.type === "youtube" && <img src="images/socials/Youtube.png" alt="YouTube Link" />}
              </a>
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default TopProjects;
