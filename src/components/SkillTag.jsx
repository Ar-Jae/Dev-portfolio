import React from 'react';

const SkillTag = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-indigo-50 text-primary text-sm rounded-full font-medium">
      {skill}
    </span>
  );
};

export default SkillTag;
