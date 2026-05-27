import React from 'react';
import './JarvisHUD.css';

interface JarvisHUDProps {
  size?: number;
}

export const JarvisHUD: React.FC<JarvisHUDProps> = ({ size = 300 }) => {
  return (
    <div 
      className="jarvis-container"
      style={{ width: size, height: size }}
    >
      <div className="hud-ring outer-ring"></div>
      <div className="hud-ring middle-ring"></div>
      <div className="hud-ring inner-ring"></div>
      <div className="jarvis-core"></div>
    </div>
  );
};
