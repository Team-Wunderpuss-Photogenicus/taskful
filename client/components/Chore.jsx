import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ chores, points, priority, handleDelete }) => {
  return (
    <>
      <div className="points-display">Points: {points}</div>
      <div className="points-display">Priority: {priority}</div>
      <h2 className="Chore">Chore: {chores}</h2>
      <button className="delete" onClick={handleDelete}>
        <FaTimes color="red" />
      </button>
    </>
  );
};

export default Chore;
