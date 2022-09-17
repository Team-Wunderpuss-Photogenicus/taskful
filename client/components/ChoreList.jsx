import React, { useState, useEffect } from 'react';
import Chore from './Chore';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const ChoreList = ({ chores, points, priority, handleSubmit }) => {
  const results = [];
  for (let i = 0; i < chores.length; i++) {
    results.push(
      <Chore
        chores={chores[i]}
        points={points[i]}
        priority={priority[i]}
        key={i}
      />
    );
  }

  return (
    <div className="ChoreList">
      <h2>Chores List</h2>
      {results}
      {/* {chores.map((task, i) => (
        <Chore chores={task} points={points} priority={priority} key={i} />
      ))} */}
      <div>
        <h1> Div separator</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="itemInput"
          type="text"
          placeholder="Input New Item"
          minLength="3"
        ></input>
        <input
          id="itemInput"
          type="number"
          placeholder="Enter points"
          minLength="3"
        ></input>
        <input
          id="itemInput"
          type="number"
          placeholder="Priority"
          minLength="3"
        ></input>
        <button type="Submit">Add item</button>
      </form>
    </div>
  );
};

export default ChoreList;
