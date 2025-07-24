import React from "react";
import "./Hero.css";
import profile1 from "../../assets/profile1.png"; 
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id='home' className="hero">
      <div className="hero-bg-lines"></div>
      <img src={profile1} alt="" />
      <h1><span>I'm Bushra Aslam, </span>Front End Developer & UI/UX Designer</h1>
      <p>
        I craft engaging digital experiences as a developer and UI/UX designer,
        blending clean code with intuitive design.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
