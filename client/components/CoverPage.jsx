import React from 'react';
import taskful from '../data/taskful.png';
import { Link } from 'react-router-dom';

console.log(taskful);

function CoverPage() {

  //check if there is a cookie that contains userId
    //true: get user data from database using userId
    //false: display the google login button

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
