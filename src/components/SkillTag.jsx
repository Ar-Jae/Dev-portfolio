import React from 'react';

const SkillTag = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-sm rounded-full font-medium border border-indigo-900/50">
      {skill}
    </span>
  );
};

export default SkillTag;
