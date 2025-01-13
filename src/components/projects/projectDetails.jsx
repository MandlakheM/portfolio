import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import "./projectDetails.css";

const Index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div
        className="modal-container"
        onClick={() => setOpenModal({ state: false, project: null })}
      >
        <div className="modal-wrapper">
          <CloseRounded
            className="close-icon"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            alt={project?.title}
            className="modal-image"
          />
          <h2 className="modal-title">{project?.title}</h2>
          <div className="modal-tags">
            {project?.tags.map((tag, index) => (
              <span key={index} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="modal-desc">{project?.description}</p>
          <h3 className="modal-label"><i>Features</i></h3>
          <p className="modal-date">{project?.features}</p>
          <h3 className="modal-label"><i>Challenges</i></h3>
          <p className="modal-date">{project?.challenges}</p>
          <h3 className="modal-label"><i>Grade</i></h3>
          <p className="modal-date">{project?.grade}</p>

          {project.member && (
            <>
              <h3 className="modal-label">Members</h3>
              <div className="modal-members">
                {project?.member.map((member, index) => (
                  <div key={index} className="modal-member">
                    <span className="member-name">{member.name}</span>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="modal-button-group">
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button modal-button-dull"
            >
              View Code
            </a>
            {/* <a
              href={project?.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              View Live App
            </a> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Index;
