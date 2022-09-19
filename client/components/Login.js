import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  //  useEffect(
  //    fetch('/login')
  //      .then((data) => data.json())
  //      .then((response) => setData(response))
  //  );

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="email">
          <label>Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="pass">
          <label>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <Link to="/tasks">
          <input className="Loginbutton" type="submit" value="Login"></input>
        </Link>
      </form>
    </div>
  );
}
export default Login;
