import React from 'react';
import Noise from './Noise';

const GlobalBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <Noise opacity={0.022} blendMode="overlay" />
      <div className="relative z-[1]">
        {children}
      </div>
    </div>
  );
};

export default GlobalBackground;
