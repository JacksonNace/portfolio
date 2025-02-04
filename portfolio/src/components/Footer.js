import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-message">Thanks for visiting!</div>
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
