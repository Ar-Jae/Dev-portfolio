import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation, m as M, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <LazyMotion features={domAnimation}>
      <nav className="homepage-nav w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="nav-brand select-none">
              Ar'Jae
            </Link>

            <div className="flex items-center gap-3">
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 ring-1 ring-white/10 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <ul className="nav-links hidden items-center justify-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`transition-colors duration-150 ${isActive(item.to) ? 'text-indigo-300' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {open && (
              <M.div
                id="mobile-nav"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden lg:hidden"
              >
                <ul className="flex flex-col gap-1 py-2">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-3 py-2 text-base transition-colors duration-150 hover:bg-white/5 ${isActive(item.to) ? 'text-indigo-300' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </M.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </LazyMotion>
  );
};

export default Navbar;
