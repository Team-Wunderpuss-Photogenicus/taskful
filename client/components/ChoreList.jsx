import React, { useState, useEffect } from 'react';
import Chore from './Chore';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const ChoreList = ({ chores, setChores, handleSubmit }) => {
  // const results = [];
  // for (let i = 0; i < chores.length; i++){
  //   results.push(<Chore chores={chores[i]} key={i}/>)
  // }

  return (
    <div className="ChoreList">
      <h2>Chores List</h2>
      {/* {results} */}
      {chores.map((task, i) => (
        <Chore chores={task} key={i} />
      ))}

      <div>
        <h1> Div separator</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id='itemInput'
          type="text"
          placeholder="Input New Item"
          // onChange={(e) => setChores(e.target.value)}
          minLength="3"
        ></input>
        <button type="Submit">Add item</button>
      </form>
    </div>
  );
};

export default ChoreList;
