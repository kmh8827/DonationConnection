import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { CurrentUserContext } from "./context/currentUser";
import AccountInfo from "./pages/accountInfo";

function App() {
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    console.log(user);
    AUTH.getUser().then(response => {
      console.log('THE RESPONSE DATA IS ', response.data);
      if (!!response.data.user) {
        console.log('hi')
        user.handleLogin(true);
        user.handleSetUser(response.data.user);
        console.log('USER UPDATED', user);
      } else {
        console.log(user.loggedIn);
        user.handleLogin(false);
        user.handleSetUser({});
      }
    });
  }, []);

  return (
    <div className="App">
        {user.loggedIn && (
          <div>

            <Header />
            <Router>
              <Switch>
                <Route exact path={["/"]} component={Dashboard} />
                <Route exact path={["/accountInfo"]} component={AccountInfo} />
                <Route exact path={["/donate"]} component={donationForm} />
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
        {!user.loggedIn && (
          <div>
            <Header />
            <Router>
              <Switch>
                <Route exact path={["/"]} component={Home} />
                <Route exact path={["/register"]} component={Register} />
                <Route exact path={["/accountInfo"]} component={AccountInfo} />
                <Route exact path={["/login"]} component={Login} />
                <Route component={Error} />
              </Switch>
            </Router>

          </div>
        )}
    </div>
  );
}

export default App;
