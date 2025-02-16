import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li>
            <a href="/images/experience/JacksonNaceResume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* usestate for dark mode? */}
      {/* <div>
        <img src = "" alt
      </div> */}
    </div>
  );
}

export default Navbar;
