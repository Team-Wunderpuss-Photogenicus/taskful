import React from 'react';

function Register() {
  //  useEffect(
  //    fetch('/signup')
  //      .then((data) => data.json())
  //      .then((response) => setData(response))
  //  );

  return (
    <div>
      <h3>Register</h3>

      <form>
        <div>
          <label>Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
