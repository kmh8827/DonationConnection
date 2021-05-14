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
// import Error from "./pages/errorPage";
import { CurrentUserContext } from "./context/currentUser";
import AccountInfo from "./pages/accountInfo";

function App() {
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    AUTH.getUser().then(response => {
      if (!!response.data.user) {
        user.handleLogin(true);
        user.handleSetUser(response.data.user);
      } else {
        user.handleLogin(false);
        user.handleSetUser({});
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        {user.loggedIn && (
          <div>
            <Switch>
              <Route exact path={["/"]} component={Dashboard} />
              <Route exact path={["/account"]} component={AccountInfo} />
              <Route exact path={["/dashboard"]} component={Dashboard} />
              <Route exact path={["/donate"]} component={donationForm} />
              <Route exact path={["/pickup"]} component={Pickup} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/account"]} component={AccountInfo} />
              {/* <Route component={Error} /> */}
            </Switch>
          </div>
        )}
        
        {!user.loggedIn && (
          <div>
            <Switch>
              <Route exact path={["/"]} component={Home} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/login"]} component={Login} />
              {/* <Route component={Error} /> */}
            </Switch>
          </div>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
