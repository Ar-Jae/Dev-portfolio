import React from 'react';
import { MapPin, Calendar, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-100 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="relative bg-slate-200 rounded-xl overflow-hidden aspect-square flex items-center justify-center text-slate-400">
              <span className="text-lg">Profile Image Placeholder</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">About Me</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I am a passionate software engineer with a strong foundation in web development. 
              I love turning complex problems into simple, beautiful, and intuitive designs. 
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              My journey in tech started with a curiosity for how things work on the internet, 
              which led me to dive deep into frontend and backend technologies. I'm constantly learning and evolving to stay ahead in this fast-paced industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="text-primary" size={20} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Briefcase className="text-primary" size={20} />
                <span>Software Engineer</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar className="text-primary" size={20} />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Code className="text-primary" size={20} />
                <span>Full-Stack Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
