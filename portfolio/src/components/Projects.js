
// import React, { useState } from "react";
// import "./Projects.css";

// function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Project A",
//       image: "https://via.placeholder.com/150",
//       technologies: ["React", "CSS", "JavaScript"],
//       description: "This is a brief description of Project A."
//     },
//     {
//       id: 2,
//       title: "Project B",
//       image: "https://via.placeholder.com/150",
//       technologies: ["Next.js", "Supabase", "Tailwind"],
//       description: "This is a brief description of Project B."
//     },
//     {
//       id: 3,
//       title: "Project C",
//       image: "https://via.placeholder.com/150",
//       technologies: ["Python", "Flask", "SQLAlchemy"],
//       description: "This is a brief description of Project C."
//     }
//   ];

//   const toggleDescription = (id) => {
//     setSelectedProject((prev) => (prev === id ? null : id));

//   };

//   return (
//     <div className="projects-container">
//       {projects.map((project) => (
//         <div key={project.id} className="project-card">
//           <img src={project.image} alt={project.title} className="project-image" />
//           <h3 className="project-title">{project.title}</h3>
//           <ul className="project-technologies">
//             {project.technologies.map((tech, index) => (
//               <li key={index}>{tech}</li>
//             ))}
//           </ul>
//           <button
//             className="toggle-description"
//             onClick={() => toggleDescription(project.id)}
//           >
//             {selectedProject === project.id ? "Hide Details" : "Show Details"}
//           </button>
//           {selectedProject === project.id && (
//             <p className="project-description">{project.description}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import "./Projects.css";

function Projects(){
  const[selectedProject, setselectedProject] = useState(null) // starts with null because nothing is selected yet

  const projects = [
    {
      id: 1,
      title: "Project A",
      imageUrl: "www.google.com",
      technologies: ["React, CSS, HTML"],
      description: "Brief description",
    },
    {
      id: 2,
      title: "Project A",
      imageUrl: "www.google.com",
      technologies: ["React, CSS, HTML"],
      description: "Brief description",
    },
    {
      id: 3,
      title: "Project A",
      imageUrl: "www.google.com",
      technologies: ["React, CSS, HTML"],
      description: "Brief description",
    }
  ];

  

  return (
    <div>

    </div>
  )
}

export default Projects;