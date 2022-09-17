import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import ChoreList from './components/ChoreList';
import SignUp from './components/SignUp';

function App() {
  const [data, setData] = useState([
    { chores: 'sweep', points: 20, priority: 15 },
    { chores: 'brian', points: 20, priority: 15 },
    { chores: 'louis', points: 20, priority: 15 },
  ]);
  const [chores, setChores] = useState('');
  const [points, setPoints] = useState(0);
  const [priority, setPriority] = useState(0);
  //   const fakeData = {
  //         chores: setChores(...chores, value),
  //         points: setPoints(...points, points),
  //         prioirty: setPriority(...priority, value)
  // }
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
    setData([
      ...data,
      { chores: newChore, points: newPoints, priority: newPriority },
    ]);
    document.getElementById('itemInput').value = null;
    document.getElementById('numInput').value = null;
    document.getElementById('numInput2').value = null;
  };
  console.log(chores, points, priority);
  console.log(data);

  return (
    <>
      <Leaderboard />
      <ChoreList
        data={data}
        chores={chores}
        setChores={setChores}
        handleSubmit={handleSubmit}
        points={points}
        priority={priority}
      />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* <Rouite path="/register" element={<Register/>} /> */}
      </Routes>
    </>
  );
}

export default App;
