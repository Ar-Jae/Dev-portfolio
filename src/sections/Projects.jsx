import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
