
// import Body from './components/Body';
// // import Home from './home';

// function App() {
//   return (
//     <Body/>
//   );
// }

 
// export default App;



// // src/App.js
// import React from 'react';
// import StartingLocationForm from './components/StartingLocationForm';

// function App() {
//   return (
//     <div>
//       <StartingLocationForm />
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;




