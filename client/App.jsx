import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Leaderboard from './components/Leaderboard';
import ChoreList from './components/ChoreList';

function App() {
  return (
    <>
      <Leaderboard />
      <ChoreList />
    </>
  );
}

export default App;
