import React from 'react';
import coverImg from '../assets/cover.jpg';
import { LazyMotion, domAnimation, m as MotionEl } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05 * i },
  }),
};

const ProjectShowcase = ({ projects }) => {
  return (
    <LazyMotion features={domAnimation}>
        <MotionEl.section
        className="homepage-bg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="projects-card">
          <h2 className="projects-title">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
                <MotionEl.div
                key={idx}
                className="rounded-2xl shadow-xl p-6 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={idx}
              >
                <img
                  src={project.image || coverImg}
                  alt={`${project.title} screenshot`}
                  className="mb-4 rounded-xl shadow"
                  loading="lazy"
                />
                <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <nav className="project-links-navbar">
                  {project.live && (
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Preview
                    </a>
                  )}
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </nav>
                </MotionEl.div>
            ))}
          </div>
        </div>
        </MotionEl.section>
    </LazyMotion>
  );
};

export default ProjectShowcase;
