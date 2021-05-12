import React, { useState, useEffect, createContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import donationForm from "./pages/donationForm";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import AUTH from './utils/AUTH';
import Header from "./components/header";
import Register from "./pages/register";
import Footer from "./components/footer";
import Error from "./pages/errorPage";
import { loginContext } from "./components/loginContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [userDonations, setDonations] = useState([]);
  const loggedInMemo = useMemo(() => ({loggedIn, setLoggedIn}), [loggedIn, setLoggedIn]);
  const userMemo = useMemo(() => ({user, setUser}), [user, setUser]);
  const donationMemo = useMemo(() => ({userDonations, setDonations}), [userDonations, setDonations]);

  useEffect(() => {
    AUTH.getUser().then(response => {
      console.log('THE RESPONSE DATA IS ', response.data);
      if (!!response.data.username) {
        setLoggedIn(true);
        setUser(response.data.username);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);

  const logout = (e) => {
    e.preventDefault();

    AUTH.logout().then(response => {
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  };

  return (
    <div className="App">
      { !loggedIn && (
        <div>
            <Header />
          <Router>
            <Switch>
              <Route exact path={["/"]} component={Home} />
              <Route exact path={["/register"]} component={Register} />
              <loginContext.Provider value={{ loggedInMemo, userMemo, donationMemo }}>
                <Route exact path={["/login"]} component={Login} />
              </loginContext.Provider>
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
      )}
      { loggedIn && (
        <div>
          <logoutContext.Provider value={{ loggedInMemo, userMemo, donationMemo }}>
            <Header />
          </logoutContext.Provider>
          <Router>
            <Switch>
              <Route exact path={["/"]} component={Home} />
              <donationContext.Provider value={{ user, userDonations, setDonations }}>
                <Route exact path={["/donate"]} component={donationForm} />
              </donationContext.Provider>
              <Route exact path={["/dashboard"]} component={Dashboard} />
              <Route exact path={["/home"]} component={Home} />
              <Route exact path={["/pickup"]} component={Pickup} />
              <Route exact path={["/register"]} component={Register} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
