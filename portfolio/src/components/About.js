
import './About.css'

function About() {
  return (
      <div className="about-container">
        <div className="about-me">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hello! I'm Jackson, a passionate student and upcoming IT/Software professional. I am currently studying at the University of Houston, majoring in Computer Science and minoring in math.
              When I am not coding, you can find me playing video games, watching a new show or anime, or working out.
              I am always looking for new opportunities to learn and grow as both a student and a professional in every tech career field.
            </p>
          </div>
          <div className="about-image">
            <img src="images/ichigopfp.jpg" alt="profile picture" className= "profile-image"/>
          </div>
        </div>
      </div>  
  );
}

export default About
