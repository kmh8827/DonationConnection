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
    props.history.push('/dashboard');
  }

  return (
    
      <div className="image jumbotron">
        <div>
        <form className="login">
          <h2>Login</h2><br />
          <div className="mb-3">
            <label for="inputUsername" className="form-label">Username </label>
            <input type="text" {...username} autoComplete="new-password" />
          </div>
          <div>
            <label for="inputPassword" className="form-label">Password </label>
            <input type="password" {...password} autoComplete="new-password" />
          </div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input type="button" className="loginBtn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />    
        </form>
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