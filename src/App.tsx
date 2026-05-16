import { CursorGlow } from './components/CursorGlow';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ServicesSection } from './sections/ServicesSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="bg-[#050816] text-[#E6F1FF] min-h-screen selection:bg-[#00D9FF]/30 selection:text-white font-sans relative">
      <CursorGlow />
      <ParticleBackground />
      
      <main className="relative z-10 w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
