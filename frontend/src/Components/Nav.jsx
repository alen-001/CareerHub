import React, { useState, useEffect } from 'react';

function Nav() {
    const [scrollY, setScrollY] = useState(0);
    const [maxScrollY, setMaxScrollY] = useState(0);

    useEffect(() => {
        // Function to update the maxScrollY dynamically
        const updateMaxScrollY = () => {
            setMaxScrollY(document.documentElement.scrollHeight - window.innerHeight);
        };

        // Set initial values
        updateMaxScrollY();
        setScrollY(window.scrollY);

        // Add event listeners for scroll and resize
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateMaxScrollY);

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateMaxScrollY);
        };
    }, []);

    return (
        <nav
            className="w-11/12 z-50 absolute top-0 left-1/2 transform -translate-x-1/2 my-10 flex justify-between items-center h-16  text-white shadow-sm font-mono p-10 rounded-2xl"
            role="navigation"
            style={{ backgroundColor: `rgba(0,0,0,${Math.min(scrollY / 100, 1)})` }}
        >
            <div className="font-extralight text-xl">CareerHub</div>
            <div className="m-0 p-0 flex space-x-10">
                <div className="flex items-center">Resume Parser</div>
                <div className="flex items-center">Personalized Roadmaps</div>
                <div className="relative flex flex-col items-center">
                    <div>Login</div>
                    <span className="w-12 bg-gradient-to-r from-transparent via-red-400 to-transparent h-px mt-1" />
                </div>
            </div>
            <span
                className="absolute z-50 w-4/5 bg-gradient-to-r from-transparent via-red-100 to-transparent h-px mt-1"
                style={{
                    top: "77px",
                    opacity: `${Math.max(scrollY / maxScrollY, 0)}`,
                }}
            />
        </nav>
    );
}

export default Nav;
