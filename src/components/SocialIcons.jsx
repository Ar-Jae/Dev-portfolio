import React from 'react';
import { Mail, Github, Linkedin, Award } from 'lucide-react';

const SocialIcons = ({ links }) => {
  return (
    <div className="space-y-6">
      <a href={`mailto:${links.email}`} className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary">
          <Mail size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Email</p>
          <p className="font-medium">rhojon.se@gmail.com</p>
        </div>
      </a>
      
      <a href={`https://github.com/arjaedev`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary">
          <Github size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">GitHub</p>
          <p className="font-medium">Ar'Jae's GitHub Profile</p>
        </div>
      </a>

      <a href={`https://www.linkedin.com/in/ar-jae-wiz/`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary">
          <Linkedin size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">LinkedIn</p>
          <p className="font-medium">Ar'Jae's LinkedIn Profile</p>
        </div>
      </a>

      <a href="https://www.credly.com/users/rhojon-wizzard/skills" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors">
        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-primary">
          <Award size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Credly</p>
          <p className="font-medium">Certifications & Skills</p>
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
