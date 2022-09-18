import React from 'react';
import { Link } from 'react-router-dom';

function PersonalList() {
  return (
    <div>
      <h1>Personal Chores List</h1>
      <form>
        <button type="Submit">Update</button>
      </form>

      <Link to="/tasks">
        <button> Leaderboard </button>
      </Link>
    </div>
  );
}

export default PersonalList;
