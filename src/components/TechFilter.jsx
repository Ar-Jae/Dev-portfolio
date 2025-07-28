import React from 'react';


const TechFilter = ({ techList, selectedTech, onSelect }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    <button
      className={`px-3 py-1 rounded ${selectedTech === '' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
      onClick={() => onSelect('')}
    >
      All
    </button>
    {techList.map(tech => (
      <button
        key={tech}
        className={`px-3 py-1 rounded ${selectedTech === tech ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        onClick={() => onSelect(tech)}
      >
        {tech}
      </button>
    ))}
  </div>
);

export default TechFilter;
