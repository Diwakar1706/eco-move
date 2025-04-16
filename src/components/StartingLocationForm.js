// src/components/StartingLocationForm.js
// import React, { useState } from 'react';

// const StartingLocationForm = () => {
//   const [startLocation, setStartLocation] = useState('');
//   const [destination, setDestination] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Starting: ${startLocation}\nDestination: ${destination}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <h2 className="text-2xl font-bold mb-6">Plan Your Route</h2>
//       <form onSubmit={handleSubmit} className="w-full max-w-sm">
//         <input
//           type="text"
//           placeholder="Starting Location"
//           value={startLocation}
//           onChange={(e) => setStartLocation(e.target.value)}
//           className="w-full p-3 border border-gray-400 rounded mb-4"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Destination Location"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="w-full p-3 border border-gray-400 rounded mb-4"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StartingLocationForm;



// src/components/StartingLocationForm.js
import React, { useState } from 'react';

const StartingLocationForm = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ startLocation, destination }),
    });

    const data = await response.json();
    alert(`Shortest Distance: ${data.distance}\nRecommended Mode: ${data.mode}`);
  } catch (error) {
    console.error('Error:', error);
    alert('Could not fetch route info.');
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6">Plan Your Route</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Starting Location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mb-4"
          required
        />
        <input
          type="text"
          placeholder="Destination Location"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StartingLocationForm;