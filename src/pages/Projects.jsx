import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';

const Projects = () => (
  <main className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Projects</h1>
    <ProjectShowcase />
  </main>
);

export default Projects;
