// src/App.jsx
import React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import app from './firebase';
import './App.css';

function App() {
  const handleDatabaseWrite = () => {
    const db = getDatabase(app);
    const userId = 'user123'; // Example userId, change as needed

    set(ref(db, 'users/' + userId), {
      username: "nihal",
      email: "tiwari107@gmail.com"
    })
    .then(() => {
      console.log('Data saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });
  };

  return (
    <>
      <button onClick={handleDatabaseWrite}>Save to Database</button>
    </>
  );
}

export default App;
