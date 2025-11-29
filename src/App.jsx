import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="bg-white py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
