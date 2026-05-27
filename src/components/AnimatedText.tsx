import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedCharacter = ({ 
  char, 
  start, 
  end, 
  scrollYProgress 
}: { 
  char: string; 
  start: number; 
  end: number; 
  scrollYProgress: any 
}) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-0">{char}</span>
      <motion.span
        className="absolute left-0 top-0 text-[#D7E2EA]"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  const totalChars = text.replace(/\s+/g, '').length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="mr-[0.25em] flex">
          {word.split('').map((char, charIndex) => {
            const start = charCount / totalChars;
            const end = start + (1 / totalChars);
            charCount++;
            
            return (
              <AnimatedCharacter 
                key={charIndex}
                char={char}
                start={start}
                end={end}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};
