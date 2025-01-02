import React from 'react';
import '../components/Skills.css';
// languages
import cppImage from "../images/languages/C++.png";
import JavaScriptImage from "../images/languages/Javascript.png";
import LuaImage from "../images/languages/Lua.png";
import pythonImage from "../images/languages/python.png";
import RImage from "../images/languages/R.png";
import SQLImage from "../images/languages/SQL.png";

// Technologies
import AWSImage from "../images/technologies/AWS.webp";
import AzureImage from "../images/technologies/Azure.png";
import CloudflareImage from "../images/technologies/Cloudflare.png";
import GitImage from "../images/technologies/Git.png";
import LinuxImage from "../images/technologies/Linux.png";
import PostmanImage from "../images/technologies/Postman.png";
import ReactImage from "../images/technologies/React.webp";
import WindowsImage from "../images/technologies/Windows.png";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2 className="skills-title">Coding Languages</h2>
        <div className="coding-languages">
          <img src={cppImage} alt="C++" />
          <img src={pythonImage} alt="Python" />
          <img src={JavaScriptImage} alt="JavaScript" />
          <img src={SQLImage} alt="SQL" />
          <img src={RImage} alt="R" />
          <img src={LuaImage} alt="Lua" />
        </div>
      </div>
      <div className="skills-section">
        <h2 className="skills-title">Technologies</h2>
        <div className="technologies">
          <img src={ReactImage} alt="React" />
          <img src={GitImage} alt="Git" />
          <img src={AzureImage} alt="Azure" />
          <img src={AWSImage} alt="AWS" />
          <img src={LinuxImage} alt="Linux" />
          <img src={WindowsImage} alt="Windows" />
          <img src={CloudflareImage} alt="Cloudflare" />
          <img src={PostmanImage} alt="Postman" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
