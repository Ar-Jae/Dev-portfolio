import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for readability */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2019/10/10/27725-365890983.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
          Available for work
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-primary">Ar'Jae</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
          Software Engineer | Full-Stack Developer
        </p>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build accessible, pixel-perfect, performant, and modern web experiences. 
          Passionate about creating software that solves real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#projects" variant="primary" icon={ArrowRight}>
            View My Projects
          </Button>
          <Button href="#" variant="secondary" icon={Download}>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
