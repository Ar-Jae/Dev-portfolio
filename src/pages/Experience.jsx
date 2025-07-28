import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2025',
    role: 'Portfolio Project',
    desc: 'Started new portfolio project with React, Vite, and Tailwind CSS.'
  },
  {
    year: '2024',
    role: 'Frontend Developer',
    desc: 'Worked on several client projects using React and Next.js.'
  },
  {
    year: '2023',
    role: 'UI Designer',
    desc: 'Designed user interfaces for mobile and web apps.'
  },
  // Add more experience items as needed
];

const Experience = () => (
  <motion.section className="homepage-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <div className="projects-card">
      <h2 className="projects-title">Experience</h2>
      <ul className="space-y-6">
        {experiences.map((exp, i) => (
          <li key={i} className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow" />
            <div className="rounded-xl shadow-lg p-4 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800">
              <h3 className="font-semibold text-purple-300">{exp.year} - {exp.role}</h3>
              <p className="text-gray-200">{exp.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
);

export default Experience;
