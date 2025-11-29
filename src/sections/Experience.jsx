import React, { useState } from 'react';
import { experiences, education } from '../data/portfolioData';
import { X } from 'lucide-react';

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderCardContent = (item, type) => {
    const isLong = item.description.length > 3;
    const displayItems = isLong ? item.description.slice(0, 3) : item.description;

    return (
      <div 
        className={`bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 transition-all ${
          isLong ? 'hover:shadow-md cursor-pointer hover:-translate-y-1' : ''
        }`}
        onClick={() => isLong && setSelectedItem({ ...item, type })}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h3 className="text-lg font-bold text-white">{item.title || item.degree}</h3>
          <span className="text-sm font-medium text-primary bg-indigo-900/30 px-3 py-1 rounded-full w-fit">
            {item.period}
          </span>
        </div>
        <p className="text-slate-400 font-medium mb-4">{item.company || item.institution}</p>
        <ul className="space-y-2">
          {displayItems.map((desc, idx) => (
            <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
              {desc}
            </li>
          ))}
        </ul>
        {isLong && (
          <p className="text-primary text-sm font-medium mt-4 pt-2 border-t border-slate-800">
            Click to view full details ({item.description.length - 3} more items)...
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-slate-400">My professional journey so far.</p>
        </div>

        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-900 shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  {renderCardContent(exp, 'experience')}
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-slate-400">My academic background.</p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-900 shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  {renderCardContent(edu, 'education')}
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedItem.title || selectedItem.degree}</h3>
                <p className="text-slate-400 font-medium">{selectedItem.company || selectedItem.institution}</p>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <span className="text-sm font-medium text-primary bg-indigo-900/30 px-3 py-1 rounded-full">
                  {selectedItem.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {selectedItem.description.map((item, idx) => (
                  <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
