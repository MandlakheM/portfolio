import React from 'react';
import './projectCardStyle.css';

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div className="card" onClick={() => setOpenModal({ state: true, project: project })}>
      <img src={project.image} alt={project.title} className="card-image" />
      <div className="card-tags">
        {project.tags?.map((tag, index) => (
          <span key={index} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="card-details">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-date">{project.date}</p>
        <p className="card-description">{project.description}</p>
      </div>
      {/* <div className="card-members">
        {project.member?.map((member, index) => (
          <img key={index} src={member.img} alt={member.name} className="member-avatar" />
        ))}
      </div> */}
    </div>
  );
};

export default ProjectCards;
