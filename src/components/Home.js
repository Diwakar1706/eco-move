// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Assuming firebase config is correctly set up
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// A simple hamburger icon component (or you can use an SVG/image/icon library)
const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const Home = () => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [startLocation, setStartLocation] = useState('');
    const [destinationLocation, setDestinationLocation] = useState('');
    const navigate = useNavigate();

    // Listener for authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // --- Authentication ---
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsMenuOpen(false); // Close menu on logout
            // Optionally navigate to login or landing page after logout
            navigate('/'); // Navigate to root/login page
        } catch (error) {
            console.error("Logout failed:", error);
            // Handle logout error (e.g., show a message)
        }
    };

    // --- Menu Toggle ---
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // --- Input Handlers ---
    const handleStartLocationChange = (event) => {
        setStartLocation(event.target.value);
    };

    const handleDestinationLocationChange = (event) => {
        setDestinationLocation(event.target.value);
    };

    // --- Form Submission (Example) ---
    const handleFindRoute = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Finding route from:', startLocation, 'to:', destinationLocation);
        // TODO: Add logic here to process the locations (e.g., API call)
        alert(`Route planning initiated from ${startLocation} to ${destinationLocation}`);
    };


    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleMenu}
                className="absolute top-4 left-4 z-30 p-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Toggle menu"
            >
                <HamburgerIcon />
            </button>

            {/* Sidebar Menu (Appears from left) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-20 flex flex-col`}
            >
                {/* Optional: Close button inside menu */}
                 <button
                    onClick={toggleMenu}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white p-1"
                    aria-label="Close menu"
                 >
                    ✕ {/* Simple 'X' character */}
                 </button>

                <div className="p-4 border-b border-gray-700">
                     <img src="/EcoMove-removebg-preview.png" alt="Logo" className="w-32 mb-4" />
                     <h2 className="text-lg font-semibold">Menu</h2>
                    {user ? (
                        <p className="text-sm text-gray-400 mt-1">Logged in as: {user.email}</p>
                    ) : (
                        <p className="text-sm text-gray-400 mt-1">Guest</p>
                    )}
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    {/* Menu Items */}
                    <button
                        onClick={() => {
                             // TODO: Navigate to Profile page
                             console.log('Navigate to Profile');
                             navigate('/profile'); // Example route
                             setIsMenuOpen(false);
                        }}
                        className="w-full text-left block px-3 py-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => {
                            // TODO: Navigate to Trip History page
                            console.log('Navigate to Trip History');
                            navigate('/trip-history'); // Example route
                            setIsMenuOpen(false);
                        }}
                        className="w-full text-left block px-3 py-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    >
                        Trip History
                    </button>
                    <button
                        onClick={() => {
                            // TODO: Implement Language selection logic
                            console.log('Open Language Settings');
                            // Example: maybe open a modal or navigate
                            setIsMenuOpen(false);
                        }}
                        className="w-full text-left block px-3 py-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    >
                        Languages
                    </button>
                </nav>
                 {/* Logout Button at the bottom of the menu */}
                 {user && (
                    <div className="p-4 border-t border-gray-700">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left block px-3 py-2 rounded bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            {/* Added 'ml-0' and potentially 'lg:ml-64' if you want content to shift when menu is open */}
            {/* Or use padding-left on main content */}
             <main className={`flex-grow flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}> {/* Added fade effect */}
                {/* Optional: Add padding-top if hamburger button overlaps content */}
                <div className="pt-20 text-center w-full max-w-md px-4">
                    {/* Logo could be here instead of or in addition to the menu */}
                     {/* <img className="w-48 mx-auto mb-6" src="/EcoMove-removebg-preview.png" alt="Logo" /> */}

                    <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                        Welcome to EcoMove
                    </h1>
                    <p className="mb-8 text-lg text-indigo-700">
                        Plan your route with minimal carbon footprint 🚴‍♂️
                    </p>

                    {/* Location Input Form */}
                    <form onSubmit={handleFindRoute} className="w-full space-y-4">
                        <div>
                            <label htmlFor="start-location" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                Starting Location
                            </label>
                            <input
                                type="text"
                                id="start-location"
                                value={startLocation}
                                onChange={handleStartLocationChange}
                                placeholder="Enter starting address or landmark"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="destination-location" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                Destination Location
                            </label>
                            <input
                                type="text"
                                id="destination-location"
                                value={destinationLocation}
                                onChange={handleDestinationLocationChange}
                                placeholder="Enter destination address or landmark"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                            Find Eco Route
                        </button>
                    </form>
                </div>
            </main>

             {/* Optional: Overlay when menu is open to allow clicking outside to close */}
             {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={toggleMenu}
                 ></div>
            )}
        </div>
    );
};

export default Home;

