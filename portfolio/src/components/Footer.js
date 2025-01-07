import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
            <img src="images/socials/Github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
            <img src="images/socials/LinkedIn.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

