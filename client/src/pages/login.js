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

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
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

  return (
    <div>

      <div className="image jumbotron pt-0">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">Donation Connection</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/home">Home</a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <form className="login">
            <h2 className="font">Login</h2><br />
            <div className="mb-3">
              <label for="inputUsername" className="form-label">Username </label>
              <input type="text" {...username}
                autoComplete="new-password"
                name="username"
                onChange={this.handleInputChange}
                value={username} />
            </div>
            <div>
              <label for="inputPassword" className="form-label">Password </label>
              <input type="password" {...password} autoComplete="new-password"
                name="password" onChange={this.handleInputChange} value={password} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" className="loginBtn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
          </form>
        </div>
      </div>
    </div>

  );
}


export default Login;