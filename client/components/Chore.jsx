import React, { useState, useEffect } from 'react';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ chores }) => {
  return <h2> New Chore: {chores}</h2>;
};

export default Chore;
