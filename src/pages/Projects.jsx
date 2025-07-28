import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';

const Projects = ({ projects }) => (
  <main className="homepage-bg projects-page">
    <h1 className="projects-title">Projects</h1>
    <ProjectShowcase projects={projects} />
  </main>
);

export default Projects;
