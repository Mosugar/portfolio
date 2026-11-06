import React from 'react';
import Noise from './Noise';

const GlobalBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Noise opacity={0.022} blendMode="overlay" />
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default GlobalBackground;
