import React from 'react';
import {Link} from "react-router-dom";

function NavBar (){
return (

<nav className="navbar navbar-expand-lg navbar-dark" data-navbar="static">
  <div className="container">
    <Link to="/"><button className="button">Home Page</button></Link>
    <Link to="/form"><button className="button">Donate Now</button></Link>
  </div>
</nav>
)
}

export default NavBar;