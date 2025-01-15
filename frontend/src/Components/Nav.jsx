import React from 'react'
function Nav() {
return (
        <nav className="w-11/12 z-50 sticky top-0 my-10 mx-auto flex justify-between items-center h-16 bg-[#00000012] text-white shadow-sm font-mono p-10 rounded-2xl" role="navigation">
            <div className='font-extralight text-xl '>CarrerHub</div>
            <div className='m-0 p-0 flex space-x-10'>
                    <div className='flex items-center'>Resume Parser</div>
                    <div className='flex items-center'>Personalized Roadmaps</div>
                    <div className='relative flex flex-col items-center'>
                        <div>Login</div>
                        <span className="w-12 bg-gradient-to-r from-transparent via-red-200 to-transparent h-px mt-1" />
                    </div>
            </div>
        </nav>
)
}

export default Nav
