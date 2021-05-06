import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import AUTH from './utils/AUTH';

function App() {
  const [loggedIn, setLogIn] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    AUTH.getUser().then(response => {
      if (response.data.user) {
        setLogIn(true);
        setUser(response.data.user);
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
    AUTH.login(username, password).then(response => {
      console.log(response.data);
      if (response.status === 200) {
        setLogIn(true);
        setUser(response.data.user);
      }
    });
  };

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Login} />
            <Route exact path={["/form"]} component={Form} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/pickup"]} component={Pickup}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
