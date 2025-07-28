import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Experience Timeline</h2>
    <ul className="space-y-6">
      <li className="flex items-center gap-4">
        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow" />
        <div className="rounded-xl shadow-lg p-4 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800">
          <h3 className="font-semibold text-purple-300">2025</h3>
          <p className="text-gray-200">Started new portfolio project with React, Vite, and Tailwind CSS.</p>
        </div>
      </li>
      {/* Add more timeline items here */}
    </ul>
  </motion.section>
);

export default ExperienceTimeline;
