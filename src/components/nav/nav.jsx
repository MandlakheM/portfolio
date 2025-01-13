import React, { useState } from 'react';
import "./nav.css"
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <DiCssdeck size="3rem" />
            <span>Portfolio</span>
          </a>
        </div>
        <div className="mobile-icon" onClick={() => setIsOpen(true)}>
          <FaBars />
        </div>
        <ul className={`nav-items ${isOpen ? 'mobile-menu-open' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#feedback" onClick={() => setIsOpen(false)}>Feedback</a></li>
          <li><a href="#goals" onClick={() => setIsOpen(false)}>Goals</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a></li>

          <li>
          <a className="mobile-github-button" href={Bio.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </li>
        </ul>
        <div className="button-container">
          <a className="github-button" href={Bio.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav