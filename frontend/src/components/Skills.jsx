import React from 'react';
import "./Skills.css";
import { TextFade } from './TextFade';

function Skills() {
  const skills = {
    "Languages": [
      { name: "Python", image: "images/technologies/python.png" },
      { name: "PostgreSQL", image: "images/technologies/postgresql.png" },
      { name: "C++", image: "images/technologies/C++.png" },
      { name: "JavaScript", image: "images/technologies/Javascript.png" },
    ],
    "Cloud/DevOps": [
      { name: "Azure", image: "images/technologies/Azure.png" },
      { name: "AWS", image: "images/technologies/AWS.webp" },
      { name: "Kubernetes", image: "images/technologies/kubernetes.png" },
      { name: "Terraform", image: "images/technologies/terraform.png" },
      { name: "Prometheus", image: "images/technologies/prometheus.png" },
      { name: "Grafana", image: "images/technologies/grafana_icon.svg" },
      { name: "ArgoCD", image: "images/technologies/argocd.png" },
      { name: "Ansible", image: "images/technologies/ansible.png" },
      { name: "Github Actions", image: "images/technologies/githubactions.svg" },
      { name: "Linux", image: "images/technologies/Linux.png" },
    ],
  };

  const categoryOrder = ["Languages", "Cloud/DevOps"];

  return (
    <div className="skills-container">
      {categoryOrder.map(category => (
        <div key={category} className="skill-category">
          {/* Add TextFade to the category heading */}
          <TextFade direction="up">
            <h3>{category}</h3>
          </TextFade>
          
          <div className="skills-box">
            {skills[category].map((skill) => (
              <div key={skill.name} className="skill-item">
                <img
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                {/* Add TextFade to the skill label */}
                  <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
