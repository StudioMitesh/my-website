import React from 'react';
import './header.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from './profile.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="#intro">
          <img src={profilePic} alt="Profile" className="profile-picture" />
        </a>
        <h1 className="header-title">Mitesh M. Shah</h1>
      </div>
      <nav className="header-content">
        <a href="#intro">Introduction</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="header-right">
        <div className="social-links">
          <a href="https://github.com/StudioMitesh" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/miteshmshah" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
