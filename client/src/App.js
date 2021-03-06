import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import donationForm from "./pages/donationForm";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import AUTH from './utils/AUTH';
import Register from "./pages/register";
import Footer from "./components/footer";
// import Error from "./pages/errorPage";
import { CurrentUserContext } from "./context/currentUser";
import AccountInfo from "./pages/accountInfo";

function App() {
  const { user, handleSetUser } = useContext(CurrentUserContext);

  useEffect(() => {
    AUTH.getUser().then(response => {
      if (!!response.data.user) {
        const responseUser = response.data.user;
        responseUser.isLoggedIn = true
        handleSetUser(responseUser);
      } else {
        handleSetUser({});
      }
    });
  }, []);

  return (
    <div className="App">

      <Router>
        {(user && user.isLoggedIn) ? (
          <div>
            {/* Routes for if the user is logged in */}
            <Switch>
              <Route exact path={["/"]} component={Dashboard} />
              <Route exact path={["/account"]} component={AccountInfo} />
              <Route exact path={["/dashboard"]} component={Dashboard} />
              <Route exact path={["/donate"]} component={donationForm} />
              <Route exact path={["/pickup"]} component={Pickup} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/account"]} component={AccountInfo} />
            </Switch>
          </div>
        ) : (
          <div>
            {/* Routes for if the user is not logged in */}
            <Switch>
              <Route exact path={["/"]} component={Home} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/login"]} component={Login} />
            </Switch>
          </div>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
