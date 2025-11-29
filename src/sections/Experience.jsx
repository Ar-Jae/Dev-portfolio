import React from 'react';
import { experiences, education } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Work Experience</h2>
          <p className="text-slate-600">My professional journey so far.</p>
        </div>

        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-lg font-bold text-dark">{exp.title}</h3>
                      <span className="text-sm font-medium text-primary bg-indigo-50 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Education</h2>
          <p className="text-slate-600">My academic background.</p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-lg font-bold text-dark">{edu.degree}</h3>
                      <span className="text-sm font-medium text-primary bg-indigo-50 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium mb-4">{edu.institution}</p>
                    <ul className="space-y-2">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
