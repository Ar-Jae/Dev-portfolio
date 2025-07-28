import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

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
  <>
    <Navbar />
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-card w-full max-w-2xl mx-auto rounded-2xl p-8 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800 shadow-lg flex flex-col items-center">
        <h2 className="projects-title text-3xl font-bold text-purple-300 mb-8">Experience</h2>
        <ul className="space-y-6 w-full">
          {experiences.map((exp, i) => (
            <li key={i} className="flex items-center gap-4 w-full">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow" />
              <div className="rounded-xl shadow-lg p-4 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800 w-full">
                <h3 className="font-semibold text-purple-300">{exp.year} - {exp.role}</h3>
                <p className="text-gray-200">{exp.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  </>
);

export default Experience;
