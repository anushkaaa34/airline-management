import React from 'react';
import { useLocation } from 'react-router-dom';

const FlightDisplay = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      {/* <h1>Form Data</h1>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p> */}
    </div>
  );
};

export default FlightDisplay;