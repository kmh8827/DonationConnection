import React, { useState } from 'react';
import "../assets/scss/login.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Login = (props) => {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    // if authenticated 
    props.history.push('/dashboard');
    //else return error
  }

  return (
    <div>
      <nav className="navbar navTitleBar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="navbar-brand appTitle">Donation Connection</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-right" id="navbarNav">
          <ul className="navbar-nav ml-auto pl-0">
            <li className="nav-item active">
              <a className="nav-link navBtn" href="/home">Home</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container loginContainer w-50 h-50">
        <div className="row mb-2 ml-1">
          <h2 className="font">Login</h2><br />
        </div>
        <form>
          <div className="form-group">
            <label for="inputUsername" className="form-label">Email address</label>
            <input type="text" {...username} autoComplete="new-password" className="form-control" id="login" />
          </div>
          <div className="form-group mb-4">
            <label for="inputPassword" className="form-label" id="password">Password</label>
            <input type="password" {...password} className="form-control" autoComplete="new-password" />
          </div>
        </form>
        <div className="row floater mb-5">

          <a className="registerBtn" href="/register">Register</a>

          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input type="button" className="btn btn-info loginBtn mr-3" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>


        {/* <form className="login">
          <h2 className="font">Login</h2><br />
          <div className="mb-3">
            <label for="inputUsername" className="form-label">Username </label>
            <input type="text" {...username} autoComplete="new-password" />
          </div>
          <div>
            <label for="inputPassword" className="form-label" id="password">Password </label>
            <input type="password" {...password} autoComplete="new-password" />
          </div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input type="button" className="loginBtn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </form> */}


      </div>
    </div>

  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;