import React from 'react';
import './header.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Mitesh M. Shah</h1>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="contact-info">
        <a href="mailto:miteshmanishshah@gmail.com">miteshmanishshah@gmail.com</a>
        <a href="mailto:mshah402@gatech.edu">mshah402@gatech.edu</a>
        <p>(678) 234-6003</p>
          <div className="social-links">
            <a href="https://github.com/StudioMitesh" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/miteshmshah" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>   
    </header>
  );
}

export default Header;
