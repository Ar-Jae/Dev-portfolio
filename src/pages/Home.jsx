import React, { useState } from 'react';
import { LazyMotion, domAnimation, m as motion, AnimatePresence } from 'framer-motion';
import '../styles/homepage.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ResumeDownload from '../components/ResumeDownload';
import avatarImg from '../assets/avatar.jpg';



const socialLinks = [
  { href: '#', label: 'Website', icon: '🌐' },
  { href: 'https://github.com/ArJae', label: 'GitHub', icon: '🐙' },
  { href: 'https://www.linkedin.com/in/ar-jae-wiz/', label: 'LinkedIn', icon: '💼' },
  { href: 'mailto:rhojon.se@gmail.com', label: 'Email', icon: '✉️' },
];

const Home = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <div className="homepage-bg">
        <Navbar />
        <motion.section
          className="homepage-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="homepage-gradient-bg" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="hero-avatar"
              onClick={() => setShowAvatarModal(true)}
              style={{ cursor: 'pointer' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={avatarImg}
                alt="Ar'Jae avatar"
                className="avatar-img"
              />
            </motion.div>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hey, I'm <span className="hero-name">Ar'Jae</span><br />
              <span className="hero-role">A Software Developer</span>
            </motion.h1>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="hero-keyword">A fullstack developer</span> with solid foundations in <span className="hero-keyword">design</span>.<br />
              Passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="hero-btn contact-btn"><span>📞</span> Contact Me</Link>
              <Link to="/projects" className="hero-btn projects-btn"><span>👨🏾‍💻</span> View Projects</Link>
            </motion.div>
            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ textDecoration: 'none' }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {showAvatarModal && (
              <motion.div
                className="avatar-modal-bg"
                onClick={() => setShowAvatarModal(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="avatar-modal"
                  onClick={e => e.stopPropagation()}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={avatarImg} alt="Ar'Jae avatar full" className="avatar-modal-img" />
                  <button className="avatar-modal-close" onClick={() => setShowAvatarModal(false)}>&times;</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </LazyMotion>
  );
};
     
export default Home;
