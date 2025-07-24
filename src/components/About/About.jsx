import React from "react";
import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile1.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="Theme Pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile"  loading="lazy"/>
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Bushra Aslam, a passionate Front End Developer and UI/UX
              Designer based in Pakistan.
            </p>
            <p>
              With a strong foundation in HTML, CSS, and JavaScript, I bring
              designs to life with precision and creativity. I thrive on
              challenges and continuously seek opportunities to learn and grow
              in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Material UI</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div id='about' className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>4+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default About;
