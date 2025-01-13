import React, { useState } from "react";
import { skills } from "../../data/constants";
import "./skills.css";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="skills-container">
      <div className="skills-wrapper">
        <p className="skills-desc">Explore My </p>
        <h1 className="skills-title">Skills</h1>
        <div className="skills-list-container">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <h2 className="skill-card-title">{skill.title}</h2>
              <div className="skill-items-container">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="skill-item"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="skill-item-image"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dialog for hovered skill */}
        {hoveredSkill && (
          <div className="skill-dialog">
            <h3>{hoveredSkill.name}</h3>
            <p><strong>Proficiency:</strong> {hoveredSkill.proficiency}</p>
            <p><strong>Additional notes:</strong> {hoveredSkill.notes}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
