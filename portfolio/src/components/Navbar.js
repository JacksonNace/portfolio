import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Link as ScrollLink } from "react-scroll"; // Import for smooth scrolling
import "./Navbar.css"; // Ensure your CSS file is correctly linked

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility on hamburger click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Hamburger icon */}
        <div 
          className={`navbar__hamburger ${menuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Menu items */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="navbar__links" 
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              className="navbar__links" 
              onClick={() => setMenuOpen(false)}
            >
              About
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink 
              to="experience" 
              smooth={true} 
              duration={500} 
              className="navbar__links" 
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="navbar__links" 
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="navbar__item">
            <Link to="/experience" className="navbar__links" onClick={() => setMenuOpen(false)}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
