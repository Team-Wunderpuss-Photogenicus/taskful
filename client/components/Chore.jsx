import React, { useState, useEffect } from 'react';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ chores, points, priority }) => {
  return (
    <>
      <div className="points-display">Points: {points}</div>
      <div className="points-display">Priority: {priority}</div>
      <h2 className="Chore">Chore: {chores}</h2>
    </>
  );
};

export default Chore;
