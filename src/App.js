import React from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
//import Hero from './components/Hero';
import About from './components/About';
//import Education from './components/Education';
//import Experience from './components/Experience';
import Projects from './components/Projects';
//import SkillsAwards from './components/SkillsAwards';
//import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;