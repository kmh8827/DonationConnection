import React from 'react';
import '../assets/scss/nav.scss'

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-brand">Donation Connection</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/form">Donate Now!</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;

