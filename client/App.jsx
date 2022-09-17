import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import ChoreList from './components/ChoreList';

function App() {
  const [chores, setChores] = useState(['asdf', '32rg', 'hello']);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setChores(e.target[0].value);
  };


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
