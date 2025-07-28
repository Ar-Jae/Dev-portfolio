import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <div className="projects-card">
      <h2 className="projects-title">About Me</h2>
      <p className="text-lg text-gray-200 mb-6">
        Hi, I'm Ar'Jae! I'm a passionate fullstack developer with a strong foundation in design and user experience. I love building modern, responsive web applications and exploring new technologies. My goal is to craft seamless digital experiences that blend creativity and functionality.
      </p>
      <ul className="list-disc pl-6 text-gray-300">
        <li>Fullstack development (React, Node.js, Vite)</li>
        <li>UI/UX design</li>
        <li>Mobile-first, responsive design</li>
        <li>Animation with framer-motion</li>
        <li>Continuous learning & improvement</li>
      </ul>
    </div>
  </motion.section>
);

export default About;
