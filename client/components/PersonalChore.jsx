import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ id, chores, points, priority, handleDelete, setData }) => {
  const handlePersonal = (id) => {
    e.preventDefault();
    fetch(`/individual`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));

    fetch(`/api`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="Chore"> {chores}
      <div className="points-display">
        <div className="points-display">Points: {points}</div>
        <div className="points-display">Priority: {priority}</div>
      </div>
      <button className="delete" value={chores} onClick={()=>handleDelete(id)}>
        <FaTimes color="red" />
      </button>
      </h2>
    </>
  );
};

export default Chore;
