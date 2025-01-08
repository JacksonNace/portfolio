import React from 'react';
import '../components/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <div className="coding-languages">
          <img src="images/languages/C++.png" alt="C++" />
          <img src="images/languages/python.png" alt="Python" />
          <img src="images/languages/Javascript.png" alt="JavaScript" />
          <img src="images/languages/SQL.png" alt="SQL" />
          <img src="images/languages/R.png" alt="R" />
          <img src="images/languages/Lua.png" alt="Lua" />
        </div>
      </div>
      <div className="skills-section">
        <div className="technologies">
          <img src="images/technologies/React.webp" alt="React" />
          <img src="images/technologies/Git.png" alt="Git" />
          <img src="images/technologies/Azure.png" alt="Azure" />
          <img src="images/technologies/AWS.webp" alt="AWS" />
          <img src="images/technologies/Linux.png" alt="Linux" />
          <img src="images/technologies/Windows.png" alt="Windows" />
          <img src="images/technologies/Cloudflare.png" alt="Cloudflare" />
          <img src="images/technologies/Postman.png" alt="Postman" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
