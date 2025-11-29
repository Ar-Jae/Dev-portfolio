import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
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
  <LazyMotion features={domAnimation}>
    <>
    <Navbar />
    <motion.section
      className="homepage-bg"
      style={{ minHeight: '100vh', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-card" style={{ width: '100vw', minHeight: '100vh', height: '100vh', margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem 2rem 2rem' }}>
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.ul
          className="experience-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.13 } },
          }}
          style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', padding: 0, listStyle: 'none' }}
        >
          {experiences.map((exp, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="experience-item"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', width: '100%' }}
            >
              <div style={{ width: '1.2rem', height: '1.2rem', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #6366f1)', boxShadow: '0 2px 8px rgba(139,92,246,0.15)' }} />
              <div style={{ borderRadius: '1rem', boxShadow: '0 2px 8px rgba(139,92,246,0.10)', padding: '1rem', background: 'rgba(31,41,55,0.85)', width: '100%' }}>
                <h3 className="experience-title" style={{ fontWeight: 600, color: '#a78bfa', marginBottom: '0.3rem' }}>{exp.year} - {exp.role}</h3>
                <p className="experience-desc" style={{ color: '#e5e7eb', fontSize: '1.05rem' }}>{exp.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
    </>
  </LazyMotion>
);

export default Experience;
