import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PersonalChore from './PersonalChore';

function PersonalList() {
  const [data, setData] = useState([
    { chores: 'sweep', points: 20, priority: 15 },
    { chores: 'brian', points: 20, priority: 15 },
    { chores: 'louis', points: 20, priority: 15 },
  ]);
  const [chores, setChores] = useState('');
  const [points, setPoints] = useState(0);
  const [priority, setPriority] = useState(0);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch('/individual')
      .then(res => res.json())
      .then((respdata) => {
        console.log('data', respdata);
        setData(respdata)
      })
      .catch((err) => {
      })
  }, [refresh]);

  // const handleSubmit = (e) => {
  //   let newChore = e.target[0].value;
  //   let newPoints = e.target[1].value;
  //   let newPriority = e.target[2].value;
  //   e.preventDefault();
  //   fetch(`/individual`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //       choreName: newChore
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .catch((err) => console.log(err));

  //   setData([
  //     ...data,
  //     { chores: newChore, points: newPoints, priority: newPriority },
  //   ]);
  //   document.getElementById('itemInput').value = null;
  //   document.getElementById('numInput').value = null;
  //   document.getElementById('numInput2').value = null;
  // };
  // console.log(chores, points, priority);
  // console.log(data);

  const handleDelete = (id, e) => {
    // e.preventDefault();
    fetch(`/individual/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((data) => {
        const newRefresh = !refresh
        setRefresh(newRefresh)
        return data.json()
      })
        .catch((err) => console.log(err));
        // setData(data.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>Personal Chores List</h1>
      {data.map((task, i) => (
        <PersonalChore
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

      <Link to="/tasks">
        <button> Leaderboard </button>
      </Link>
    </div>
  );
}

export default PersonalList;
