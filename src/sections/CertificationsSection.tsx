import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';
import { Award, GraduationCap, Trophy, Presentation, Code2 } from 'lucide-react';

const achievements = [
  { icon: <Award className="w-6 h-6 text-[#00D9FF]" />, title: "RPA Bootcamp Certificate" },
  { icon: <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />, title: "84.5% Academic Milestone" },
  { icon: <Code2 className="w-6 h-6 text-[#22D3EE]" />, title: "AI/ML Learning Certifications" },
  { icon: <Presentation className="w-6 h-6 text-[#00D9FF]" />, title: "Technical Workshops" },
  { icon: <Trophy className="w-6 h-6 text-[#8B5CF6]" />, title: "Hackathons Participant" }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Milestones & <span className="text-gradient">Achievements</span>
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} y={20}>
              <GlassCard className="flex items-center gap-4 py-4 px-6 md:py-5 md:px-8 hover:bg-white/5 transition-colors">
                <div className="p-2 rounded-lg bg-[#0B1120] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white/90 whitespace-nowrap">
                  {item.title}
                </h3>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
