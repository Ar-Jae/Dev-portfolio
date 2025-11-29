import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 transition-colors">
        <span className="font-medium">Project Preview</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
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
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <Github size={18} />
            Code
          </a>
          <a 
            href={project.demo} 
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
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
