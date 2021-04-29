/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const NavBar =() => {
return (

<nav class="navbar navbar-expand-lg navbar-dark" data-navbar="static">
  <div class="container">

    <section class="navbar-mobile">
      <nav class="nav nav-navbar ml-auto">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Donate</a>
        <a class="nav-link" href="#">Pick-up</a>
        <a class="nav-link" href="#">Your Reservations</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Register</a>
      </nav>
    </section>

  </div>
</nav>
)
}

export default NavBar;