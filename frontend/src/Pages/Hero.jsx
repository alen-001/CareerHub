import React from 'react';
import Nav from '../Components/Nav';
import VideoBackground from '../Components/VideoBg';

function Hero() {
  return (
    <VideoBackground>
      {/* Other components can be added here */}
      <Nav/>
      <div className='flex justify-center'>
        <div>
      <div className='text-white text-9xl font-bold ml-16'>Ready to accelerate your career?</div>
      <div className='text-white text-2xl w-1/2 font-extralight ml-16 mt-10'>Take the next step with your personal AI mentor. Discover tailored guidance, bridge skill gaps, and unlock opportunities to achieve your dream career.</div>
      </div>
      </div>
    </VideoBackground>
  );
}

export default Hero;