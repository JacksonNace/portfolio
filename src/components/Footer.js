import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-message">Thanks for visiting!</div>
        <div className="footer-copyright">&copy; {new Date().getFullYear()} Jackson Nace</div>
      </div>
      <div className="footer-right">
        <div className="footer-socials">
          <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
            Github <span className="emoji">&#8599;</span>
          </a>
          <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="emoji">&#8599;</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
