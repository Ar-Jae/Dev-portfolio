import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


const Projects = ({ projects }) => (
  <>
    <Navbar />
    <motion.section
      className="projects-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="projects-card">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  </>
);

export default Projects;
