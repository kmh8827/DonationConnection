import React from 'react';
import '../assets/scss/nav.scss'

function Header() {
  return (
    <nav className="nav navbar navTitleBar navbar-expand-md fixed-top">
      <div className="navbar-brand appTitle">Donation Connection</div>
      <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </div>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ml-auto pl-0">
          <li className="nav-item active">
            <a className="nav-link navBtn" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navBtn" href="/login">login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navBtn" href="/account">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;

