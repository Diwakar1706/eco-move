



// // src/components/Header.js

// import React, { useEffect, useState } from 'react';
// import { auth } from '../firebase';
// import { onAuthStateChanged, signOut } from 'firebase/auth';

// const Header = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe(); // clean up listener on unmount
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     alert('Logged out successfully!');
//   };

//   return (
//     <div className="absolute px-10 py-2 z-10 flex justify-between items-center w-full text-white">
//       <img className="w-48" src="/EcoMove-removebg-preview.png" alt="Logo" />

//       {user ? (
//         <div className="flex items-center gap-4">
//           <span className="hidden sm:inline">Welcome, {user.email}</span>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 text-sm"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <p className="text-sm">Not signed in</p>
//       )}
//     </div>
//   );
// };

// export default Header;



// src/components/Header.js

import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // <-- Add this for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // clean up listener on unmount
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out successfully!');
    navigate('/'); // <-- Redirect to login after logout
  };

  return (
    <div className="absolute px-10 py-2 z-10 flex justify-between items-center w-full text-black">
      <img className="w-48" src="/EcoMove-removebg-preview.png" alt="Logo" />

      {user ? (
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Welcome, {user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-sm"></p>
      )}
    </div>
  );
};

export default Header;




