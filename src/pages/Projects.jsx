import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Projects = ({ projects }) => (
  <>
    <Navbar />
    <motion.section
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-card">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="project-card"
            >
              <img 
                src={project.image || '/src/assets/cover.jpg'} 
                alt={project.title + ' screenshot'} 
                className="project-img"
                onError={e => { e.target.src = '/src/assets/cover.jpg'; }}
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <nav className="project-links-navbar">
                {project.live && <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live Preview</a>}
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </nav>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </>
);

export default Projects;
