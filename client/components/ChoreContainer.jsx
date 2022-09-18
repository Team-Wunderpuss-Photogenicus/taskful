import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import ChoreList from './ChoreList';

function ChoreContainer() {
  const [data, setData] = useState([
    { chores: 'sweep', points: 20, priority: 15 },
    { chores: 'brian', points: 20, priority: 15 },
    { chores: 'louis', points: 20, priority: 15 },
  ]);
  const [chores, setChores] = useState('');
  const [points, setPoints] = useState(0);
  const [priority, setPriority] = useState(0);

  // useEffect(
  //   fetch('/family')
  //     .then((data) => data.json())
  //     .then((response) => setData(response))
  // );

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
  // console.log(chores, points, priority);
  // console.log(data);

  const handleDelete = (id) => {
    e.preventDefault();
    fetch(`/api?_id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({_id: id}),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err))
    setData(data.filter((item) => item._id !== id))
  }

  return (
    <>
      <Leaderboard />
      <ChoreList
        data={data}
        chores={chores}
        setChores={setChores}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        points={points}
        priority={priority}
      />
      <Link to="/personal">
        <button>User Profile</button>
      </Link>
    </>
  );
}

export default ChoreContainer;
