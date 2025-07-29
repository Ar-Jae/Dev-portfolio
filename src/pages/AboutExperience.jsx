import React from 'react';
import { motion } from 'framer-motion';

const aboutData = {
  name: 'Ar’Jae',
  title: 'Full Stack Developer',
  description:
    'Passionate developer with experience in building modern, scalable web applications using React, Vite, Tailwind CSS, and more. Skilled in UI/UX, accessibility, and performance optimization.',
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      details:
        'Developed responsive web interfaces, implemented animations with framer-motion, and collaborated with designers to deliver seamless user experiences.'
    },
    {
      role: 'UI/UX Designer',
      company: 'Creative Minds',
      period: '2020 - 2022',
      details:
        'Designed and prototyped user-centric interfaces, conducted usability testing, and improved accessibility across multiple projects.'
    }
  ]
};

const AboutExperience = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg mt-10"
  >
    <h1 className="text-3xl font-bold text-indigo-600 mb-2">{aboutData.name}</h1>
    <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-4">{aboutData.title}</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-6">{aboutData.description}</p>
    <h3 className="text-lg font-semibold text-indigo-500 mb-2">Experience</h3>
    <ul className="space-y-4">
      {aboutData.experience.map((exp, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.5 }}
          className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg shadow"
        >
          <div className="font-bold text-indigo-700 dark:text-indigo-300">{exp.role}</div>
          <div className="text-gray-700 dark:text-gray-300">{exp.company} &mdash; {exp.period}</div>
          <div className="text-gray-600 dark:text-gray-400 mt-1">{exp.details}</div>
        </motion.li>
      ))}
    </ul>
  </motion.section>
);

export default AboutExperience;
