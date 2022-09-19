import React from 'react';
import taskful from '../data/taskful.png';
import { Link } from 'react-router-dom';

console.log(taskful);

function CoverPage() {
  return (
    <div className="CoverPage">
      <img src={taskful} />
      <Link to="/GoogleAuth">
        <button className="getStarted">Get Started!</button>
      </Link>
    </div>
  );
}
export default CoverPage;
