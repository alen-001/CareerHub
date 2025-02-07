import React from 'react'
import logo from '@/assets/logo.png'
function LoadingScreen() {
return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <div className=' w-96 h-96 animate-pulse flex items-center justify-center opacity-50' style={{ animation: 'pulse 2s infinite' }}>
            <div className='flex items-center justify-center text-center font-extralight text-4xl'>CareerShepherds</div>
        <img src={logo} alt="logo" className='w-32 h-32'/>
        <div className=' font-thin absolute bottom-0 right-0 p-4'> 
            <div>Our servers our loading...</div>
            <div>Inital server bootup might take upto 30 seconds</div>
            <div>Please be patient...</div>
        </div>
        </div>
        <style jsx>{`
            @keyframes pulse {
                0% {
                    opacity: 0.5;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0.5;
                }
            }
        `}</style>

    </div>
)
}

export default LoadingScreen
