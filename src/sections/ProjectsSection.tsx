import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { TechBadge } from '../components/TechBadge';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const projects = [
  {
    id: "01",
    title: "Driver Drowsiness Detection System",
    category: "Computer Vision",
    desc: "Real-time driver monitoring system detecting eye closure and fatigue using computer vision techniques.",
    tech: ["Python", "OpenCV", "Dlib", "Computer Vision"],
    features: ["Live webcam monitoring", "Eye aspect ratio detection", "Alarm triggering", "Real-time processing"],
    color: "#00D9FF"
  },
  {
    id: "02",
    title: "AI Recommendation System",
    category: "Machine Learning",
    desc: "Student recommendation system using machine learning algorithms and dataset analysis.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: ["Intelligent recommendations", "CSV/PDF data extraction", "Dataset preprocessing", "Prediction models"],
    color: "#8B5CF6"
  },
  {
    id: "03",
    title: "AI Automation Workflow System",
    category: "AI & Automation",
    desc: "Automation workflows integrating AI agents and APIs for productivity and business operations.",
    tech: ["Python", "FastAPI", "Agentic AI", "API Integrations"],
    features: ["AI-powered automation", "Workflow orchestration", "API integrations", "Smart task handling"],
    color: "#22D3EE"
  },
  {
    id: "04",
    title: "Rotary Club Management Platform",
    category: "Full Stack Development",
    desc: "Modern event management and NGO digital platform with multilingual support.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Event management", "Expense tracking", "Member management", "Multi-language support"],
    color: "#00D9FF"
  },
  {
    id: "05",
    title: "ERP & Business Management System",
    category: "Enterprise Software",
    desc: "Business ERP platform for revenue tracking, expenses, notifications, and client management.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL"],
    features: ["Admin dashboard", "Analytics", "Revenue management", "Mobile app integration"],
    color: "#8B5CF6"
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[90vh] flex items-center justify-center sticky top-0" style={{ paddingTop: `${index * 30}px` }}>
      <motion.div 
        style={{ scale }}
        className="w-full max-w-5xl rounded-[30px] border border-white/10 bg-[#0B1120] p-8 md:p-12 relative transform-origin-top overflow-hidden group shadow-2xl"
      >
        {/* Glow effect */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundColor: project.color }}
        />

        <div className="grid md:grid-cols-2 gap-10 relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold opacity-30 font-accent" style={{ color: project.color }}>
                {project.id}
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider text-[#E6F1FF]/60">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {project.title}
            </h3>
            
            <p className="text-[#E6F1FF]/70 leading-relaxed text-lg">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map(t => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
                <GithubIcon className="w-4 h-4" />
                Code
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Key Features</h4>
            <ul className="flex flex-col gap-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[#E6F1FF]/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* Placeholder for Parallax Image if available in future */}
            <div className="mt-auto h-40 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center overflow-hidden relative group-hover:border-white/20 transition-colors">
              <span className="text-white/20 font-medium tracking-widest uppercase">Project Preview</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </FadeIn>

        <div className="relative pb-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              totalCards={projects.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
