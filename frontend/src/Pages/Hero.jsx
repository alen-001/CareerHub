import React from 'react';
import Nav from '../Components/Nav';
import VideoBackground from '../Components/VideoBg';

function Hero() {
  return (
    <VideoBackground>
      {/* Other components can be added here */}
   
      <div className='flex justify-center items-center h-screen'>
        <div>
      <div className='text-white text-9xl font-bold ml-16'>Ready to accelerate your career?</div>
      <div className="w-1/2 bg-gradient-to-r from-transparent via-red-400 to-transparent h-px " />
      <div className='text-white text-2xl w-1/2 font-extralight ml-16 mt-10'>Take the next step with your personalised AI mentor. Discover tailored guidance, bridge skill gaps, and unlock opportunities to achieve your dream career.</div>
      </div>
      </div>
    </VideoBackground>
  );
}

export default Hero;