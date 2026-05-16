import React from 'react';

interface TechBadgeProps {
  label: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, className = '' }) => {
  return (
    <span className={`px-3 py-1 text-xs md:text-sm font-medium font-accent tracking-wider rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20 ${className}`}>
      {label}
    </span>
  );
};
