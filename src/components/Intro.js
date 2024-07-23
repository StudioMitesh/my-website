import React from 'react';
import './intro.css';
import profilePic from './assets/profile.jpg';

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="intro-text">
          <h1 className="intro-title">
            <span className="cut-animation">Mitesh M. Shah</span>
          </h1>
          <p className="intro-tagline">
            Aspiring Software Engineer and CS Student at Georgia Tech
          </p>
          <p className="intro-blurb">
            Interested in machine learning and AI applications in sports analytics, medical technology, and energy-based predictive analytics. Experienced with Python (Sci-kit Learn, PyTorch, Pandas), Java, and C++ programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
