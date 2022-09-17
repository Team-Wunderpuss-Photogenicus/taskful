import React from 'react';

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
        <input className="Loginbutton" type="submit" value="Login"></input>
      </form>
    </div>
  );
}
export default Login;
