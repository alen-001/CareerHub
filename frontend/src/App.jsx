import React from 'react';
import Nav from './Components/Nav';
import VideoBackground from './Components/VideoBg';
import Hero from './Pages/Landing/Hero';
import Feature from './Pages/Landing/Feature';
import Bento from './Pages/Landing/Bento';
import CallToAction from './Pages/Landing/CallToAction';
function App() {
  return (
    <div className='w-screen bg-black'>
        <div className='sticky top-0 z-50'><Nav></Nav></div>
        <div>
        <Hero/>
        <Bento/>
        <CallToAction/>
        </div>
    </div>
  );
}

export default App;