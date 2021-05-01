import React from 'react';

const NavBar = () => {
return (

<nav className="navbar navbar-expand-lg navbar-dark" data-navbar="static">
  <div className="container">

    <section className="navbar-mobile">
      <nav className="nav nav-navbar ml-auto">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Donate</a>
        <a className="nav-link" href="#">Pick-up</a>
        <a className="nav-link" href="#">Your Reservations</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Register</a>
      </nav>
    </section>

  </div>
</nav>
)
}

export default NavBar;