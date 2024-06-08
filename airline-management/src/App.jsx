import React from 'react';
import {useState , useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from "./Components/FlightSearch.jsx";
import FlightDisplay from './Components/FlightDisplay.jsx';
//import { fetchMessage } from './services/api';



function App() 
{

  // const [message, setMessage] = useState('');

  //   useEffect(() => {
  //       const getMessage = async () => {
  //           const data = await fetchMessage();
  //           setMessage(data.message);
  //       };

  //       getMessage();
  //   }, []);

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" Component={FlightSearch } />
        <Route path="/FlightDisplay" element={FlightDisplay} />
      </Routes>
    </Router>

    </>
  )
}

export default App
