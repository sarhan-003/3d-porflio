import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';

const lines = [
  { type: 'command', text: 'python -m init_journey --target "Sarhan Bakarman"' },
  { type: 'output', text: 'Initializing AI/ML Engineer profile...' },
  { type: 'command', text: 'load_modules --list' },
  { type: 'output', text: '[OK] Machine Learning\n[OK] Deep Learning\n[OK] MLOps\n[OK] Computer Vision\n[OK] Full Stack Development\n[OK] Agentic AI Systems' },
  { type: 'command', text: 'execute mission' },
  { type: 'output', text: 'Building impactful intelligent systems and modern digital products.\nSolving real-world problems using AI.\nCreating futuristic experiences through design + engineering.' }
];

export const AITerminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < lines.length; i++) {
        await new Promise(r => setTimeout(r, lines[i].type === 'command' ? 1000 : 400));
        setVisibleLines(prev => prev + 1);
      }
    };
    sequence();
  }, []);

  return (
    <FadeIn delay={0.2}>
      <div className="w-full rounded-xl overflow-hidden bg-[#050816]/80 border border-[#00D9FF]/20 shadow-[0_0_20px_rgba(0,217,255,0.1)] font-mono text-sm md:text-base backdrop-blur-md">
        <div className="flex items-center px-4 py-2 bg-[#0B1120] border-b border-[#00D9FF]/20 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[#E6F1FF]/40 text-xs tracking-widest uppercase">AI_Terminal // execution</span>
        </div>
        <div className="p-4 md:p-6 min-h-[300px] flex flex-col gap-2 text-[#E6F1FF]/80">
          {lines.slice(0, visibleLines).map((line, idx) => (
            <div key={idx} className={line.type === 'command' ? 'text-[#00D9FF]' : 'text-[#8B5CF6] opacity-80 whitespace-pre-wrap'}>
              {line.type === 'command' && <span className="mr-2 text-white/50">$</span>}
              {line.text}
            </div>
          ))}
          <div className="animate-pulse w-2 h-4 bg-[#00D9FF] mt-1" />
        </div>
      </div>
    </FadeIn>
  );
};
