import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAwards from './components/SkillsAwards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <SkillsAwards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;