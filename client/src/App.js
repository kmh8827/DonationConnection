import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import donationForm from "./pages/donationForm";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Pickup from "./pages/pickup";
import Register from "./pages/register";
import Footer from "./components/footer";
import Error from "./pages/errorPage";
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/donate"]} component={donationForm} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/home"]} component={Home} />
            <Route exact path={["/pickup"]} component={Pickup}/>
            <Route exact path={["/register"]} component={Register} />
            <Route exact path={["/error"]} component={Error} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
