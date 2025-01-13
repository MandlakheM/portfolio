import React from "react";
import HeroBgAnimation from "./HeroBgAnimation";
import "./hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pic from "../../assets/avataaars (20).png";
import { Bio } from "../../data/constants";
function Hero() {
  return (
    <section id="profile">
      {/* Background Animation */}
      <div className="bg-animation">
        <HeroBgAnimation />
      </div>

      {/* Content Section */}
      <div className="hero-content">
        <div className="section__pic-container">
          <img src={pic} alt="Mandilakhe Mangumta" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I am</p>
          <h1 className="title">
            <span>{Bio.name}</span>
          </h1>
          <p className="section__text__p2">{Bio.roles}</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open(Bio.resume, "_blank")}
            >
              Download CV
            </button>
          </div>
          <div id="socials-container">
            <FaLinkedin
              className="icon"
              onClick={() => window.open(Bio.linkedin, "_blank")}
            />
            <FaGithub
              className="icon"
              onClick={() => window.open(Bio.github, "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
