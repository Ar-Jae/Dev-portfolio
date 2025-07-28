
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProjectShowcase from '../components/ProjectShowcase';




const Projects = ({ projects }) => (
  <>
    <Navbar />
    <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="projects-card">
        <h2 className="projects-title">Projects</h2>
        <ProjectShowcase projects={projects} />
      </div>
    </motion.section>
  </>
);

export default Projects;
