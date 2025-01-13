import React from 'react';
import './goalsCard.css';

const GoalsCard = ({ education }) => {
  return (
    <div className="education-card">
      <div className="card-top">
        {/* <img src={education.img} alt="school logo" className="card-image" /> */}
        <div className="card-body">
          <div className="card-name">{education.school}</div>
        </div>
      </div>
      <div className="card-description">
        <span className="card-description-text">{education.desc}</span>
      </div>
    </div>
  );
};

export default GoalsCard;
