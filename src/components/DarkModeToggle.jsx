import React, { useEffect, useState } from 'react';


const DarkModeToggle = () => {
  // Check system preference and localStorage
  const getInitialMode = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const [dark, setDark] = useState(getInitialMode);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      className={`px-3 py-2 rounded-lg shadow transition-colors duration-300 ${dark ? 'bg-gray-800/80 text-white hover:bg-purple-600' : 'bg-white/80 text-gray-900 hover:bg-yellow-300'}`}
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <span role="img" aria-label="Dark mode">🌙</span>
      ) : (
        <span role="img" aria-label="Light mode">☀️</span>
      )}
    </button>
  );
};

export default DarkModeToggle;
