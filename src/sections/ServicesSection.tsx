import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';
import { BrainCircuit, Eye, Bot, Code, LayoutTemplate, Cloud, Database, Palette } from 'lucide-react';

const services = [
  { icon: <BrainCircuit className="w-8 h-8 text-[#00D9FF]" />, title: "AI/ML Solutions" },
  { icon: <Eye className="w-8 h-8 text-[#8B5CF6]" />, title: "Computer Vision Apps" },
  { icon: <Bot className="w-8 h-8 text-[#22D3EE]" />, title: "AI Automation" },
  { icon: <Code className="w-8 h-8 text-[#00D9FF]" />, title: "Full Stack Development" },
  { icon: <LayoutTemplate className="w-8 h-8 text-[#8B5CF6]" />, title: "Portfolio Websites" },
  { icon: <Cloud className="w-8 h-8 text-[#22D3EE]" />, title: "SaaS Platforms" },
  { icon: <Database className="w-8 h-8 text-[#00D9FF]" />, title: "ERP Systems" },
  { icon: <Palette className="w-8 h-8 text-[#8B5CF6]" />, title: "UI/UX Design" }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What I <span className="text-gradient">Do</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} y={20}>
              <GlassCard className="h-full flex flex-col items-center justify-center text-center gap-4 group p-6 cursor-pointer">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white">
                  {service.title}
                </h3>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
