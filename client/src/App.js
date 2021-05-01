<<<<<<< HEAD
// import logo from './logo.svg';
// // import './App.css';
// import NavBar from './pages/Navbar/navbar'
import Home from './pages/Home/home.js';

function App() {
  return (
    <Home />
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Pickup from "./pages/pickup";
import Donation from "./pages/donation";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/form"]} component={Form} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/pickup"]} component={Pickup}/>
            <Route exact path={["/donation"]} component={Donation} />
          </Switch>
        </Router>
    </div>
>>>>>>> f2cabf63f14d8a701cba11c0e34d74f96bc8d746
  );
}

export default App;
