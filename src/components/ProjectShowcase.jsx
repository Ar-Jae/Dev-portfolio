import React from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  // TODO: Replace with dynamic project data
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Example project card */}
        <div className="rounded-2xl shadow-xl p-6 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
          <img src="/assets/project1.png" alt="Project Screenshot" className="mb-4 rounded-xl shadow" />
          <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Project Title</h3>
          <p className="text-sm text-gray-300 mb-4">Short description...</p>
          <div className="flex gap-3">
            <a href="#" className="px-4 py-2 rounded bg-gray-900/80 hover:bg-purple-600 transition font-medium border border-gray-700 shadow">Live Preview</a>
            <a href="#" className="px-4 py-2 rounded bg-gray-900/80 hover:bg-indigo-600 transition font-medium border border-gray-700 shadow">GitHub</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectShowcase;
