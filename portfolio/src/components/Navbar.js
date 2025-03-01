import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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
        <div className="navbar__hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Menu items */}
        <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__links">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__links">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/experience" className="navbar__links">Experience</Link>
          </li>
          <li className="navbar__item">
            <Link to="/project" className="navbar__links">Project</Link>
          </li>
          <li className="navbar__item">
            <Link to="/project" className="navbar__links">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
