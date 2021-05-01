import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Form from "./pages/Form/form";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/form"]} component={Form} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
