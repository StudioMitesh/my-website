import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1>Mitesh M. Shah</h1>
      <p>Computer Science Student at Georgia Institute of Technology</p>
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
    </header>
  );
}

export default Header;
