import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "../cards/projectCard";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        <p className="projects-desc">Browse My Recent </p>
        <h1 className="projects-title">Projects</h1>
        <div className="toggle-button-group">
          <button
            className={`toggle-button ${toggle === "all" ? "active" : ""}`}
            onClick={() => setToggle("all")}
          >
            All
          </button>
          <div className="divider"></div>
          <button
            className={`toggle-button ${toggle === "react" ? "active" : ""}`}
            onClick={() => setToggle("react")}
          >
            REACT{" "}
          </button>
          <div className="divider"></div>
          <button
            className={`toggle-button ${toggle === "nodejs" ? "active" : ""}`}
            onClick={() => setToggle("nodejs")}
          >
            NODE JS{" "}
          </button>
          <div className="divider"></div>
          <button
            className={`toggle-button ${toggle === "mongodb" ? "active" : ""}`}
            onClick={() => setToggle("mongodb")}
          >
            MONGO DB{" "}
          </button>
          <div className="divider"></div>

          <button
            className={`toggle-button ${
              toggle === "reactnative" ? "active" : ""
            }`}
            onClick={() => setToggle("reactnative")}
          >
            REACT NATIVE
          </button>
          <div className="divider"></div>

          <button
            className={`toggle-button ${
              toggle === "assessment" ? "active" : ""
            }`}
            onClick={() => setToggle("assessment")}
          >
            ASSESSMENT{" "}
          </button>
          <div className="divider"></div>

          {/* <button
            className={`toggle-button ${toggle === "group" ? "active" : ""}`}
            onClick={() => setToggle("group")}
          >
            GROUP PROJECTS
          </button> */}
        </div>
        <div className="card-container">
          {(toggle === "all"
            ? projects
            : projects.filter((item) => item.category === toggle)
          ).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
