import React, { useState, useEffect } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const Chore = ({ id, chores, points, priority, handleDelete, setData }) => {
  const handlePersonal = (id) => {
    e.preventDefault();
    fetch(`/api`, {
      method: 'POST',
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
  // console.log(h2.Chore)
  return (
    <div>


      <h2 className="Chore" name="Chore" value={chores}>
        {chores}
        <div className="points-display">
          <div className="points-display">Points: {points}</div>
          <div className="points-display">Priority: {priority}</div>
        </div>
        <button className="delete" value={id} onClick={()=>handleDelete(id)}>
          <FaCalendarCheck color="green" />
        </button>
      </h2>
      </div> 
  )
};

export default Chore;