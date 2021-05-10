import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import "../assets/scss/login.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BrandIcon from '../assets/images/icons/BrandIcon.png'

const Login = (props) => {
  // const username = useFormInput('');
  // const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null)
  const [userObject, setUserObject] = useState({
    username: '',
    password: ''
  });

  // handle button click of login form
  const handleLogin = (event) => {
    // props.history.push('/dashboard');
    event.preventDefault();
    props.login(userObject.username, userObject.password)
    //   if (result.status === '200')
    //   setRedirectTo('/dashboard');
    // });
  }

  // Updates the username and password while being typed in
  const handleInputChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value
    });
  };

  // const useFormInput = initialValue => {
  //   const [value, setValue] = useState(initialValue);

  //   const handleChange = e => {
  //     setValue(e.target.value);
  //   }
  //   return {
  //     value,
  //     onChange: handleChange
  //   }
  // }

  if (redirectTo) {
    return (
      <Redirect to={{ pathname: redirectTo }} />
    )
  } else {
    return (
      <div>
        <nav className="navbar navTitleBar navbar-expand-lg fixed-top">
          <img id="brandIcon" className=" mx-auto image-fluid" alt="Pickup" src={BrandIcon} />
          <div className="navbar-brand appTitle ml-4">Donation Connection</div>
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
                <label for="inputUsername" className="form-label">Username </label>
                <input type="text"
                  className="form-control"
                  autoComplete="new-username"
                  name="username"
                  onChange={handleInputChange}
                  value={userObject.username} />
            </div>
            <div className="form-group mb-4">
              <label className="form-label" id="password">Password</label>
              <input type="text"
                  className="form-control"
                  autoComplete="new-password"
                  name="password"
                  onChange={handleInputChange}
                  value={userObject.password} />
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
}

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//     );
//   }
// }

export default Login;