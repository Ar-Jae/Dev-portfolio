
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import ProjectShowcase from './components/ProjectShowcase';
import projectsData from './data/projects';

function App() {
  const [projects, setProjects] = useState(projectsData);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectShowcase projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard projects={projects} setProjects={setProjects} />} />
      </Routes>
    </Router>
  );
}

export default App;
