import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { TechBadge } from '../components/TechBadge';
import { Magnet } from '../components/Magnet';
import { FileDown, ChevronRight, Mail } from 'lucide-react';
import { JarvisHUD } from '../components/JarvisHUD';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 pb-10 z-10">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 relative z-20">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm Sarhan<br />
              <span className="text-gradient">AI/ML Engineer & Builder</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[#E6F1FF]/70 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              I build intelligent systems, machine learning applications, AI automation workflows, and futuristic digital experiences.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-wrap gap-4 mt-4">
            <Magnet padding={30} strength={0.3}>
              <a href="#projects" className="group relative px-6 py-3 bg-[#00D9FF]/10 text-[#00D9FF] rounded-full overflow-hidden border border-[#00D9FF]/30 hover:bg-[#00D9FF]/20 transition-all flex items-center gap-2">
                <span className="font-medium tracking-wide">View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnet>
            
            <Magnet padding={30} strength={0.3}>
              <a href="#contact" className="px-6 py-3 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium tracking-wide">Contact Me</span>
              </a>
            </Magnet>
            
            <Magnet padding={30} strength={0.3}>
              <a href="/Sarhan_Bakarman_Resume.pdf" download="Sarhan_Bakarman_Resume.pdf" className="px-6 py-3 text-white/70 hover:text-white transition-all flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                <span className="font-medium tracking-wide">Resume Download</span>
              </a>
            </Magnet>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-8 flex flex-col gap-4">
            <h3 className="text-sm font-accent uppercase tracking-widest text-[#E6F1FF]/50">Core Focus</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge label="Machine Learning" />
              <TechBadge label="Computer Vision" />
              <TechBadge label="MLOps" />
              <TechBadge label="Deep Learning" />
              <TechBadge label="Generative AI" />
              <TechBadge label="Full Stack AI" />
            </div>
          </FadeIn>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 hidden md:flex items-center justify-center">
          <FadeIn delay={0.3} className="relative w-full flex items-center justify-center min-h-[400px]">
            <JarvisHUD size={500} />
          </FadeIn>
          
          {/* Floating Stats Cards */}
          <FadeIn delay={0.6} x={50} y={-50} className="absolute top-[10%] right-0 glass-card px-4 py-3 rounded-xl border border-white/10 backdrop-blur-md">
            <p className="text-xs text-[#E6F1FF]/60 font-accent uppercase tracking-wider mb-1">Status</p>
            <p className="text-sm font-medium text-[#00D9FF]">Open to AI Internships</p>
          </FadeIn>
          
          <FadeIn delay={0.7} x={-50} y={50} className="absolute bottom-[20%] left-0 glass-card px-4 py-3 rounded-xl border border-white/10 backdrop-blur-md">
            <p className="text-xs text-[#E6F1FF]/60 font-accent uppercase tracking-wider mb-1">Education</p>
            <p className="text-sm font-medium text-[#8B5CF6]">BTech ECE Student</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
