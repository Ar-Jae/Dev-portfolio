import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => (
  <nav className="homepage-nav">
    <div className="nav-brand">Ar'Jae.dev</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="nav-darkmode"><DarkModeToggle /></div>
  </nav>
);

export default Navbar;
