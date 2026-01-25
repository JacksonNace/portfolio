import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "desktodunks.site",
      imageUrl: "images/projects/Portfolio.png",
      technologies: ["Terraform", "Azure Functions", "CosmosDB", "Python", "Github Actions", "React"],
      description: [
        "I recently launched a live serverless analytics platform that’s currently supporting over 20 recurring users with real-time game management and a custom state-driven admin dashboard.",
        "On the infrastructure side, I used Terraform to architect a reproducible Azure environment, handling everything from Cosmos DB to serverless functions through version-controlled HCL.",
        "I built the backend using a Python-based Azure Functions API, where I implemented custom header-based auth and managed secrets via environment variables to keep NoSQL operations secure.",
        "To make the data work for basketball analytics, I designed a schema optimized for performance, using strategic partition keys to handle game logging and leaderboard generation on the fly.",
        "I also tied everything together with a GitHub Actions CI/CD pipeline, ensuring that what I build locally is exactly what hits production every single time.",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/desktodunks.site" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 6,
      title: "Homelab",
      imageUrl: "images/projects/Portfolio.png",
      technologies: ["React", "JavaScript", "Azure Function", "CosmosDB"],
      description: [
        "Yep, the website you're seeing right now!",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 11,
      title: "TheGlowUp.dev",
      imageUrl: "images/projects/Portfolio.png",
      technologies: ["React", "JavaScript", "Azure Function", "CosmosDB"],
      description: [
        "Yep, the website you're seeing right now!",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 16,
      title: "Portfolio Website",
      imageUrl: "images/projects/Portfolio.png",
      technologies: ["React", "JavaScript", "Azure Function", "CosmosDB"],
      description: [
        "Yep, the website you're seeing right now!",
      ],
      social: [
        { type: "github", link: "https://github.com/JacksonNace/portfolio" },
        // { type: "youtube", link: "https://youtube.com" }
      ],
    },
    {
      id: 21,
      title: "MarketMentor - Rice Hackathon",
      imageUrl: "images/projects/MarketMentor.png",
      technologies: ["React", "CSS", "React", "Google Gemini", "Postman", "Auth0"],
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
      id: 26,
      title: "Mockey Interview - UT Austin Hackathon",
      imageUrl: "images/projects/MonkeyInterview.png",
      technologies: ["PostgreSQL", "NodeJS", "NextJS", "Express","TailwindCSS", "Claude", "Postman" ],
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
      id: 31,
      title: "Bleach RPG",
      imageUrl: "images/projects/BleachRPG.png",
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
    <div className="projects-container"id="projects">
            <h2 className="section-title">Projects</h2>

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
            <ul className="project-description">
              {project.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <div className="technologies-and-links flex justify-between items-center mt-2">
              <ul className="project-technologies flex gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="social-links flex gap-2">
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
        </div>
      ))}
    </div>
  );
}

export default Projects;
