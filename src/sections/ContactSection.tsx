import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { GlassCard } from '../components/GlassCard';
import { Mail, FileText, Send } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '../components/Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 flex flex-col min-h-screen justify-between">
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <p className="text-xl text-[#E6F1FF]/80 leading-relaxed font-light">
                Whether you have a project in mind, want to discuss AI, or just want to say hi, my inbox is open.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col gap-4 mt-4">
              <a href="#" className="flex items-center gap-4 text-[#E6F1FF]/70 hover:text-[#00D9FF] transition-colors p-4 rounded-xl hover:bg-white/5">
                <LinkedinIcon className="w-6 h-6" />
                <span className="font-medium text-lg">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-[#E6F1FF]/70 hover:text-[#8B5CF6] transition-colors p-4 rounded-xl hover:bg-white/5">
                <GithubIcon className="w-6 h-6" />
                <span className="font-medium text-lg">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-[#E6F1FF]/70 hover:text-[#22D3EE] transition-colors p-4 rounded-xl hover:bg-white/5">
                <InstagramIcon className="w-6 h-6" />
                <span className="font-medium text-lg">Instagram</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-4 text-[#E6F1FF]/70 hover:text-[#00D9FF] transition-colors p-4 rounded-xl hover:bg-white/5">
                <Mail className="w-6 h-6" />
                <span className="font-medium text-lg">Email</span>
              </a>
              <a href="/Sarhan_Bakarman_Resume.pdf" download="Sarhan_Bakarman_Resume.pdf" className="flex items-center gap-4 text-[#E6F1FF]/70 hover:text-white transition-colors p-4 rounded-xl bg-white/5 border border-white/10 mt-2">
                <FileText className="w-6 h-6" />
                <span className="font-medium text-lg">Download Resume</span>
              </a>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <FadeIn delay={0.3}>
            <GlassCard className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#E6F1FF]/60 font-medium uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-[#0B1120]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]/50 transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#E6F1FF]/60 font-medium uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-[#0B1120]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8B5CF6]/50 transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#E6F1FF]/60 font-medium uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..." 
                  className="bg-[#0B1120]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22D3EE]/50 transition-colors resize-none"
                />
              </div>

              <button className="mt-2 w-full py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </GlassCard>
          </FadeIn>
          
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/10 py-8 text-center relative z-20">
        <p className="text-[#E6F1FF]/50 font-medium tracking-wide">
          Building the future with AI.
        </p>
      </div>
    </section>
  );
};
