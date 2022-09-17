import React, { useState, useEffect } from 'react';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ chores, points, priority }) => {
  return (
    <h2 className="Chore">
      New Chore: {chores} Points: {points} Priority: {priority}
    </h2>
  );
};

export default Chore;
