import React from 'react';
import { skillCategories } from '../data/portfolioData';
import SkillTag from '../components/SkillTag';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of technologies and tools I work with to build robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <SkillTag key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
