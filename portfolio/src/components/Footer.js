import React from "react";
import "./Footer.css";
import { IoIosLink } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-message">Thanks for visiting!</div>
        <div className="footer-copyright">&copy; 2025 Jackson Nace</div>
      </div>
      <div className="footer-right">
        <div className="footer-socials">
          <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
            Github <IoIosLink />
          </a>
          <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
            LinkedIn <IoIosLink />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
