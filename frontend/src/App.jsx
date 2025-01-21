import React from 'react';
import Nav from './Components/Nav';
import VideoBackground from './Components/VideoBg';
import Hero from './Pages/Hero';
import Feature from './Pages/Feature';
import Bento from './Pages/Bento';
import CallToAction from './Pages/CallToAction';
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