import React from 'react';
import { LazyMotion, domAnimation, m as M } from 'framer-motion';
import Navbar from '../components/Navbar';


const Projects = ({ projects }) => (
  <LazyMotion features={domAnimation}>
    <>
      <Navbar />
        <M.section
        className="projects-page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="projects-card">
            <M.h2
            className="projects-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
              Projects
            </M.h2>
          <M.div
            className="projects-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
            }}
          >
            {projects.map((project, idx) => (
              <M.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="project-card"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(139,92,246,0.18)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img 
                  src={project.image || '/src/assets/cover.jpg'} 
                  alt={project.title + ' screenshot'} 
                  className="project-img"
                  onError={e => { e.target.src = '/src/assets/cover.jpg'; e.target.onerror = null; }}
                />
                <h3 className="project-title mb-2">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <nav className="project-links-navbar">
                  {project.live && <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live Preview</a>}
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </nav>
              </M.div>
            ))}
          </M.div>
        </div>
        </M.section>
    </>
  </LazyMotion>
);


export default Projects;
