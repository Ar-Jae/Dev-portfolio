import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'Fantastic developer! Highly recommended.',
  },
  {
    name: 'John Smith',
    text: 'Delivered quality work on time.',
  },
];

const Testimonials = () => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Testimonials</h2>
    <div className="space-y-6">
      {testimonials.map((t, i) => (
        <div key={i} className="rounded-2xl shadow-xl p-6 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-800">
          <p className="italic text-lg text-gray-200">"{t.text}"</p>
          <p className="text-right font-semibold mt-4 text-purple-300">- {t.name}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
