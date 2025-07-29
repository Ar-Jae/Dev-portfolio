import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


const profileImg = '/assets/profile-placeholder.png'; // Replace with your image path

const skills = [
  'Fullstack development (React, Node.js, Vite)',
  'UI/UX design',
  'Mobile-first, responsive design',
  'Animation with framer-motion',
  'Continuous learning & improvement',
];

const About = () => (
  <>
    <Navbar />
    <motion.section
      className="homepage-bg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-card">
        <div className="about-profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <motion.img
            src={profileImg}
            alt="Profile"
            className="about-avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 12px rgba(139,92,246,0.15)' }}
          />
          <h2 className="projects-title" style={{ marginTop: '1.2rem' }}>About Me</h2>
        </div>
        <motion.p
          className="about-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi, I'm <span className="hero-name">Ar'Jae</span>! I'm a passionate <span className="hero-keyword">fullstack developer</span> with a strong foundation in design and user experience. I love building modern, responsive web applications and exploring new technologies. My goal is to craft seamless digital experiences that blend creativity and functionality.
        </motion.p>
        <motion.ul
          className="about-skills"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
          }}
          style={{ margin: '2rem 0', paddingLeft: '1.5rem', color: '#e5e7eb', fontSize: '1.08rem', listStyle: 'disc' }}
        >
          {skills.map((skill, idx) => (
            <motion.li
              key={skill}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              style={{ marginBottom: '0.7rem' }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  </>
);

export default About;
