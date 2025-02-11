import React from 'react';
import "./Skills.css";

function Skills() {
  const skills = {
    "Languages": [
      { name: "C++", image: "images/languages/C++.png" },
      { name: "Python", image: "images/languages/python.png" },
      { name: "JavaScript", image: "images/languages/Javascript.png" },
      { name: "SQL", image: "images/languages/SQL.png" },
      { name: "R", image: "images/languages/R.png" },
      { name: "Lua", image: "images/languages/Lua.png" },
    ],
    "Cloud/IT/Backend": [
      { name: "Azure", image: "images/technologies/Azure.png" },
      { name: "AWS", image: "images/technologies/AWS.webp" },
      { name: "Linux", image: "images/technologies/Linux.png" },
      { name: "Windows", image: "images/technologies/Windows.png" },
      { name: "Cloudflare", image: "images/technologies/Cloudflare.png" },
    ],
    "Frontend/Web": [
      { name: "React", image: "images/technologies/React.webp" },
      { name: "Git", image: "images/technologies/Git.png" },
      { name: "Postman", image: "images/technologies/Postman.png" },
    ],
  };

  const categoryOrder = ["Languages", "Cloud/IT/Backend", "Frontend/Web"];

  return (
    <div className="skills-container">
      {categoryOrder.map(category => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-box">
            {skills[category].map((skill) => (
              <div key={skill.name} className="skill-item"> {/* Added a wrapper div */}
                <img
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                <span className="skill-label">{skill.name}</span> {/* Added the label */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;