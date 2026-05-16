import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';

const skillsData = [
  {
    category: "AI/ML",
    color: "#00D9FF",
    skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "OpenCV", "NLP", "Deep Learning"]
  },
  {
    category: "MLOps & Cloud",
    color: "#8B5CF6",
    skills: ["Docker", "GitHub Actions", "FastAPI", "Flask", "CI/CD", "Deployment", "Linux"]
  },
  {
    category: "Frontend",
    color: "#22D3EE",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"]
  },
  {
    category: "Backend",
    color: "#00D9FF",
    skills: ["Node.js", "Express", "MongoDB", "Firebase"]
  },
  {
    category: "Tools",
    color: "#8B5CF6",
    skills: ["Git", "Figma", "VS Code", "Postman", "Linux"]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.1} y={30}>
              <GlassCard glowColor={`${group.color}33`} className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ color: group.color, backgroundColor: group.color }} />
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-md text-[#E6F1FF]/80 hover:text-white hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
