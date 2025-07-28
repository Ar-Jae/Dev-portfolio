import React from 'react';
import { motion } from 'framer-motion';

const CurrentWork = () => (
  <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
    <h2 className="text-xl font-bold">Current Work</h2>
    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded shadow mt-2">
      <p>Working on a new React + Vite portfolio project. Stay tuned!</p>
    </div>
  </motion.div>
);

export default CurrentWork;
