import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Projects from './sections/Projects';
//import { motion } from 'framer-motion';
//import projectData from './sections/projectData';
import Contact from './sections/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Tech Stack Section */}
        <section id="techstack">
          <TechStack />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects">
        <Projects/>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
    </Router>
  );
}

export default App;
