import React from 'react';
import { skillCategories } from '../data/portfolioData';
import SkillTag from '../components/SkillTag';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technical Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of technologies and tools I work with to build robust applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-dark mb-4 border-b border-slate-100 pb-2">
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
