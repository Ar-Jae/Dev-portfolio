import React from 'react';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';

const AdminLog = ({ log }) => (
  <div className="w-full max-w-xl mx-auto">
    <h3 className="text-indigo-400 font-bold mb-4 text-lg">Activity Log</h3>
    {log.length === 0 ? (
      <div className="text-gray-400">No recent actions.</div>
    ) : (
      <ul className="space-y-3">
        {log.map((entry, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            className="bg-gray-800 rounded-lg p-4 flex flex-col gap-1 shadow"
          >
            <div className="flex items-center gap-2">
              <span className={`font-bold text-xs px-2 py-1 rounded ${entry.action === 'add' ? 'bg-green-700 text-green-200' : entry.action === 'edit' ? 'bg-indigo-700 text-indigo-200' : 'bg-red-700 text-red-200'}`}>{entry.action.toUpperCase()}</span>
              <span className="text-gray-400 text-xs">{entry.time}</span>
            </div>
            <div className="text-gray-200 text-sm">
              <span className="font-semibold text-indigo-300">{entry.project.title}</span>
              {entry.action === 'add' && <> was <span className="text-green-400">added</span>.</>}
              {entry.action === 'edit' && <> was <span className="text-indigo-400">edited</span>.</>}
              {entry.action === 'delete' && <> was <span className="text-red-400">deleted</span>.</>}
            </div>
            <div className="text-xs text-gray-400">{entry.project.description}</div>
          </motion.li>
        ))}
      </ul>
    )}
  </div>
);

export default AdminLog;
