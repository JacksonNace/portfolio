import React from 'react'
import './Navbar.css'

function Navbar() {
return (
  <nav className="navbar">
    <div className="navbar-logo">
      <a href="/">Jackson Nace</a>
    </div>
    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#certification">Certifications</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
)
}

export default Navbar

