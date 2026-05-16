import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 217, 255, 0.1)',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: `0 10px 40px ${glowColor}`,
        borderColor: glowColor.replace('0.1', '0.4')
      }}
      className={`glass-card rounded-2xl p-6 md:p-8 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
