// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/EcoMove-removebg-preview.png" alt="Logo" className="w-32" />
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
        >
          Profile
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
            <div className="px-4 py-2 font-semibold border-b border-gray-300">
              {user?.email || 'Guest'}
            </div>
            <button
              onClick={() => {
                navigate('/home');
                setShowDropdown(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
