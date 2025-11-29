import React, { useState } from 'react';
import { projects as staticProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import { X, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [projects] = useState(staticProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Click on a project to view more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-96 bg-slate-800 overflow-hidden">
                {selectedProject.demo ? (
                  <iframe 
                    src={selectedProject.demo} 
                    title={selectedProject.title}
                    className="w-full h-full border-0 bg-white"
                    loading="lazy"
                  />
                ) : selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500">
                    <span className="font-medium text-lg">Project Preview</span>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur rounded-full hover:bg-slate-800 text-slate-300 hover:text-red-500 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map((tech, idx) => (
                  <span key={idx} className="text-sm font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed text-lg whitespace-pre-wrap">
                {selectedProject.description}
              </p>

              <div className="flex gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
