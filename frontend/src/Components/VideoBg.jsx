import React from 'react';
import vid from '../assets/bg1.mp4';

const VideoBackground = ({ children }) => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <video 
        src={vid}
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover transform rotate-180 blur-xl z"
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;