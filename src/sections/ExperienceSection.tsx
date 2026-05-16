import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';

const experiences = [
  {
    role: "PR & Marketing Intern",
    company: "Blockchain Magazine",
    duration: "2023 - Present",
    desc: "Managed Web3 gaming promotions, authored articles on blockchain tech, and grew online communities."
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2022 - Present",
    desc: "Built modern, responsive websites for various clients including NGOs and local businesses using React and Tailwind."
  },
  {
    role: "AI/ML Engineer (Self-Taught)",
    company: "Personal Journey",
    duration: "2023 - Present",
    desc: "Developed end-to-end machine learning models, computer vision applications, and automated workflows."
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            My <span className="text-gradient">Experience</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050816] bg-[#8B5CF6] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_#8B5CF6] z-10 ml-0 md:ml-auto md:mr-auto" />
              
              <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] hover:-translate-y-1 transition-transform ml-4 md:ml-0">
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-[#00D9FF] font-accent text-sm tracking-wider uppercase">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-[#E6F1FF]/60 font-medium">{exp.company}</span>
                </div>
                <p className="text-[#E6F1FF]/70 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
