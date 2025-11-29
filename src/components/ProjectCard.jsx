import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Project Image */}
      <div className="h-48 bg-slate-800 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            <span className="font-medium">Project Preview</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={project.github} 
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            <Github size={18} />
            Code
          </a>
          <a 
            href={project.demo} 
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
