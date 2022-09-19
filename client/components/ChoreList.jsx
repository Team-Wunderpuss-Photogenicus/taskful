import React, { useState, useEffect } from 'react';
import Chore from './Chore';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const ChoreList = ({ data, handleSubmit, handleDelete, setData }) => {
  const results = [];

  return (
    <div className="ChoreList">
      <h2>Task List</h2>
      <div>
        <h2> Add new task..</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="itemInput"
          type="text"
          placeholder="Input New Item"
          minLength="3"
          required
        ></input>
        <input
          id="numInput"
          type="number"
          placeholder="Enter points"
          minLength="3"
          required
        ></input>
        <input
          id="numInput2"
          type="number"
          placeholder="Priority"
          minLength="3"
          required
        ></input>
        <button type="Submit">Add item</button>
      </form>
      {data.map((task, i) => (
        <Chore
          data={task} //{ chores: 'louis', points: 20, priority: 15 }
          id = {task.id}
          chores={task.chorename} //{ chores: 'louis' }
          points={task.points} //{  points: 20,  }
          priority={task.priority} // {} priority: 15 }
          key={i}
          handleDelete={handleDelete}
          setData={setData}
        />
      ))}
    </div>
  );
};

export default ChoreList;
