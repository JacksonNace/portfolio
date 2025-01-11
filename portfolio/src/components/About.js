import React, { useEffect, useState } from "react";
import './About.css';

function About() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch("https://your-backend-api-url.com/visitor-counter")
      .then(response => response.json())
      .then(data => {
        setVisitorCount(data.count);
      })
      .catch(error => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <div className="about-container">
      <div className="about-me">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm Jackson, a passionate student and upcoming IT/Software professional. 
            I am always looking for new opportunities to learn and grow as both a student and a professional in every tech career field.
          </p>
          <div className="visitor-counter">
            <h2>Visitor Counter</h2>
            <p>Number of visitors: {visitorCount}</p>
          </div>
        </div>
        <div className="about-image">
          <img src="images/ichigopfp.jpg" alt="profile picture" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default About;

