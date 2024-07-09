import React from 'react';

function Projects() {
  return (
    <section className="research-projects">
      <h2>Research & Projects</h2>
      <div className="project-item">
        <h3>NeuraQED: Quantum Error Correction via Simulated Neural Networks</h3>
        <p>Simulated quantum syndromes, constructed circuit codes, and developed a hybrid NN to improve logical error rate by 6%.</p>
      </div>
      <div className="project-item">
        <h3>Brain-Computer Interface for Nonverbal Patients</h3>
        <p>Crafted a brain-computer headset and developed a hybrid CNN-RNN model to predict patient responses with 92% accuracy.</p>
      </div>
      <div className="project-item">
        <h3>SVD Clustering Analysis on Goldman Sachs Share Prices</h3>
        <p>Generated SVD and K-Means clustering algorithms to improve trading outlooks.</p>
      </div>
      <div className="project-item">
        <h3>Hyper-Localized Analysis of NYC’s Lead Poisoning Epidemic</h3>
        <p>Created a 97% accurate PCA for targeted health initiatives.</p>
      </div>
      <div className="project-item">
        <h3>Geographic Analysis of Traffic Accident Severity in Atlanta</h3>
        <p>Produced a 95% accurate gradient regression model for predicting accident severity.</p>
      </div>
    </section>
  );
}

export default Projects;
