import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="homepage-nav">
    <div className="nav-brand">Ar'Jae</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
