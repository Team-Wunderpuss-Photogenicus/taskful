import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import ChoreList from './components/ChoreList';

function App() {
  const [data, setData] = useState();
  const [chores, setChores] = useState([]);
  //chores ['Clean windows', 'nothing']

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setChores([...chores, e.target[0].value]);
    document.getElementById('itemInput').value = '';
  };
  console.log(chores);
  return (
    <>
      <Leaderboard />
      <ChoreList
        chores={chores}
        setChores={setChores}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
