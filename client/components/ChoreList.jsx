import React, { useState, useEffect } from 'react';
import Chore from './Chore';

//add fetch call functions into deconstructed object
import {} from '../services/user';

const ChoreList = ({ data, chores, points, priority, handleSubmit }) => {
  const results = [];
  // for (let i = 0; i < chores.length; i++) {
  //   results.push(
  //     <Chore
  //       chores={chores[i]}
  //       points={points[i]}
  //       priority={priority[i]}
  //       key={i}
  //     />
  //   );
  // }

  return (
    <div className="ChoreList">
      <h2>Chores List</h2>
      {/* {results} */}

      {/* maps out the data and generates a Chore component for each*/}
      {data.map((task, i) => (
        <Chore
          data={task} //{ chores: 'louis', points: 20, priority: 15 }
          chores={task.chores} //{ chores: 'louis' }
          points={task.points} //{  points: 20,  }
          priority={task.priority} // {} priority: 15 }
          key={i}
        />
      ))}
      <div>
        <h2> Add new task..</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="itemInput"
          type="text"
          placeholder="Input New Item"
          minLength="3"
        ></input>
        <input
          id="numInput"
          type="number"
          placeholder="Enter points"
          minLength="3"
        ></input>
        <input
          id="numInput2"
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
