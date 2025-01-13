import "./about.css";
import { Bio } from "../../data/constants";

function AboutMe() {
  return (
    <>
      <section id="about">
        <p className="section__about__text__p1">Get To Know More</p>
        <h1 className="about__title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                {/* <img
              src="./assets/experience.png"
              alt="Experience icon"
              class="icon"
            /> */}
                <h3>CodeTribe details</h3>
                <p>
                  {Bio.program} <br />
                  {Bio.location}{" "}
                </p>
              </div>
              <div className="details-container">
                {/* <img
              src="./assets/education.png"
              alt="Education icon"
              class="icon"
            /> */}
                <h3>Education</h3>
                <p>
                  Diploma in Information Technology
                  <br />
                  Vaal University of Technology
                </p>
              </div>
            </div>
            <div className="text-container">
              <p className="aboutme__text">{Bio.description}</p>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default AboutMe;
