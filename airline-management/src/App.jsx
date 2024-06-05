import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from "./FlightSearch.jsx";
import FlightDisplay from './flightDisplay.jsx';


function App() 
{

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<FlightSearch />} />
        <Route path="/result" element={<FlightDisplay />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
