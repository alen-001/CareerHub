import React from 'react';
import Nav from './Components/Nav';
import VideoBackground from './Components/VideoBg';
import Hero from './Pages/Hero';
import Feature from './Pages/Feature';

function App() {
  return (
    <div className='w-screen'>
        <div className='sticky top-0 z-50'><Nav></Nav></div>
        <div>
        <Hero/>
        <Feature/>
        </div>
    </div>
  );
}

export default App;