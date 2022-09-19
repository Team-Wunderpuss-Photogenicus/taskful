import React, { useState } from 'react';
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

  // useEffect(() => {
  //   fetch('/family')
  //     .then((data) => data.json())
  //     .then((response) => setData(response));
  // }, []);

  const handleSubmit = (e) => {
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

    let newChore = e.target[0].value;
    let newPoints = e.target[1].value;
    let newPriority = e.target[2].value;
    setData([
      ...data,
      { chores: newChore, points: newPoints, priority: newPriority },
    ]);
    document.getElementById('itemInput').value = null;
    document.getElementById('numInput').value = null;
    document.getElementById('numInput2').value = null;
  };
  // console.log(chores, points, priority);
  // console.log(data);

  const handleDelete = (id) => {
    e.preventDefault();
    fetch(`/api?_id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
    setData(data.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>Personal Chores List</h1>
      {data.map((task, i) => (
        <PersonalChore
          data={task} //{ chores: 'louis', points: 20, priority: 15 }
          chores={task.chores} //{ chores: 'louis' }
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
