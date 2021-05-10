import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
// import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import AUTH from './utils/AUTH';
import Header from "./components/header";

function App() {
    const [loggedIn, setLogIn] = useState(false);
    const [user, setUser] = useState(null);
    const [userIds, setDonationArray] = useState([]);

  useEffect(() => {
    AUTH.getUser().then(response => {
      if (response.data.username) {
        setLogIn(true);
        setUser(response.data.username);
      } else {
        setLogIn(false);
        setUser(null);
      }
    });

    return () => {
      setLogIn(false);
      setUser(null);
    };
  }, []);

  const logout = (e) => {
    e.preventDefault();

    AUTH.logout().then(response => {
      if (response.status === 200) {
        setLogIn(false);
        setUser(null);
      }
    });
  };

  const login = (username, password) => {
    console.log('login function');
    AUTH.login(username, password).then(response => {
      console.log(response.data);
      if (response.status === 200) {
        setLogIn(true);
        setUser(response.data.username);
        setDonationArray(response.data.donation);
      }
    });
  };

  return (
    <div className="App">
      { loggedIn && (
        <div>
          <Header user={user} logout={logout}/>
          <Router>
            <Switch>
              <Route exact path={["/"]} render={(props) => <Login {...props} login = {login} /> } />
              {/* <Route exact path={["/register"]} component={Register}/ > */}
              <Route exact path={["/login"]} component={(props) => <Login {...props} login = {login} />} />
              <Route exact path={["/donate"]} component={Form} />
              <Route exact path={["/dashboard"]} component={Dashboard} />
              <Route exact path={["/home"]} component={Home} />
              <Route exact path={["/pickup"]} component={Pickup} />
              {/* <Route component={Error} /> */}
            </Switch>
          </Router>
        </div>
      )}
      { !loggedIn && (
        <Router>
          <Switch>
            <Route exact path={["/"]} render={(props) => <Login {...props} login = {login} /> } />
            <Route exact path={["/dashboard"]} render={(props) => <Login {...props} login = {login} /> } />
            {/* <Route exact path={["/register"]} component={Register}/ > */}
            {/* <Route component={Error} /> */}
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
