import React, { useState } from 'react';
import './App.css';
import Fetching from './Api';  // Ensure this is the correct path to your Fetch component

function App() {
  return (
    <div className="App">
    
      <Fetching />
    </div>
  );
}

export default App;
