import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import ChoreList from './components/ChoreList';

function App() {
  const [data, setData] = useState([{chores:'Sweeping', points: 1, priority: 'medium'}]);
  const [chores, setChores] = useState([]);
  const [points, setPoints] = useState([]);
  const [priority, setPriority] = useState([]);

//   useEffect(
//     fetch('http://localhost:3000/')
//       .then((data) => data.json())
//       .then((response) => setData(response))
//   );

  const handleSubmit = (e) => {
    e.preventDefault();
    let newChore = e.target[0].value;
    let newPoints = e.target[1].value;
    let newPriority = e.target[2].value;
    setChores([...chores, newChore]);
    setPoints([...points, newPoints]);
    setPriority([...priority, newPriority]);

    document.getElementById('itemInput').value = null;
  };
  console.log(chores, points, priority);

  return (
    <>
      <Leaderboard />
      <ChoreList
        chores={chores}
        setChores={setChores}
        handleSubmit={handleSubmit}
        points={points}
        priority={priority}
      />
    </>
  );
}

export default App;
