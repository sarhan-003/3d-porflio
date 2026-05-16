import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';
import { Brain, Code2, Rocket, LineChart } from 'lucide-react';

const journeyItems = [
  {
    icon: <Brain className="w-6 h-6 text-[#00D9FF]" />,
    title: "AI/ML Learning Journey",
    desc: "Deep diving into algorithms, neural networks, and computer vision to solve complex problems."
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#8B5CF6]" />,
    title: "Full Stack Development",
    desc: "Building scalable web applications, REST APIs, and integrating machine learning models."
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#22D3EE]" />,
    title: "Startup Projects",
    desc: "Developing MVP products and AI-powered platforms for modern business use cases."
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#00D9FF]" />,
    title: "PR & Marketing Experience",
    desc: "Understanding product growth, user acquisition, and Web3 gaming promotions."
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                About <span className="text-gradient">Me</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-[#E6F1FF]/80 leading-relaxed text-lg">
                Sarhan is a passionate AI/ML Engineer focused on building impactful intelligent systems and modern digital products.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[#E6F1FF]/60 leading-relaxed">
                Currently pursuing BTech in Electronics & Computer Engineering while deeply exploring Machine Learning, Deep Learning, MLOps, Computer Vision, AI Automation, Full Stack Development, and Agentic AI Systems.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-[#E6F1FF]/60 leading-relaxed">
                He enjoys solving real-world problems using AI and creating futuristic experiences through design + engineering.
              </p>
            </FadeIn>
          </div>

          {/* RIGHT: Journey Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {journeyItems.map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + idx * 0.1} y={30}>
                <GlassCard className="h-full flex flex-col gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[#E6F1FF]/50 leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
