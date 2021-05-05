import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import Donation from "./pages/donation";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Form} />
            <Route exact path={["/form"]} component={Form} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/pickup"]} component={Pickup}/>
            <Route exact path={["/donation"]} component={Donation} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
