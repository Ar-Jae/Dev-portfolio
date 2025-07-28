import React, { useState } from 'react';
import '../styles/homepage.css';
import { Link } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';
import TechFilter from '../components/TechFilter';
import CurrentWork from '../components/CurrentWork';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ResumeDownload from '../components/ResumeDownload';
import DarkModeToggle from '../components/DarkModeToggle';
import Testimonials from '../components/Testimonials';
import avatarImg from '../assets/avatar.jpg';

const techList = ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'JavaScript'];


const Home = () => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  return (
    <div className="homepage-bg">
      {/* Cover image removed */}
      <nav className="homepage-nav">
        <div className="nav-brand">Ar'Jae.dev</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-darkmode"><DarkModeToggle /></div>
      </nav>
      <section className="homepage-hero">
        <div className="homepage-gradient-bg" />
        <div className="hero-content">
          <div className="hero-avatar" onClick={() => setShowAvatarModal(true)} style={{ cursor: 'pointer' }}>
            <img
              src={avatarImg}
              alt="Ar'Jae avatar"
              className="avatar-img"
            />
          </div>
          <h1 className="hero-title">
            Hey, I'm <span className="hero-name">Ar'Jae</span><br />
            <span className="hero-role">A Software Developer</span>
          </h1>
          <p className="hero-desc">
            <span className="hero-keyword">A fullstack developer</span> with solid foundations in <span className="hero-keyword">design</span>.<br />
            Passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="hero-btn contact-btn"><span>@</span> Contact Me</Link>
            <Link to="/projects" className="hero-btn projects-btn"><span>🔗</span> View Projects</Link>
          </div>
          <div className="hero-socials">
            <a href="#" aria-label="Website">🌐</a>
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Email">✉️</a>
          </div>
        </div>
        {showAvatarModal && (
          <div className="avatar-modal-bg" onClick={() => setShowAvatarModal(false)}>
            <div className="avatar-modal" onClick={e => e.stopPropagation()}>
              <img src={avatarImg} alt="Ar'Jae avatar full" className="avatar-modal-img" />
              <button className="avatar-modal-close" onClick={() => setShowAvatarModal(false)}>&times;</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
     
export default Home;
