import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);
  const [followers, setFollowers] = useState(false);

  const handleTap = () => {
    if (followers) {
      setPoints(points + 1);
    } else {
      alert('You must follow Furcifer on Twitter to earn points!');
    }
  };

  const handleFollowCheck = () => {
    // Replace with actual logic to check if user follows Furcifer on Twitter
    setFollowers(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Furcifer Tap-to-Earn Bot</h1>
        <p>Points: {points}</p>
        <button onClick={handleTap}>Tap to Earn</button>
        <button onClick={handleFollowCheck}>Check Twitter Follow</button>
      </header>
    </div>
  );
}

export default App;
