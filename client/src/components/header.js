import React, { useContext } from 'react';
import '../assets/scss/nav.scss'
import BrandIcon from '../assets/images/icons/BrandIcon.png'
import AUTH from "../utils/AUTH";
import { CurrentUserContext } from "../context/currentUser";

function Header() {

    const user = useContext(CurrentUserContext);

  const logout = (e) => {
    e.preventDefault();
    AUTH.logout().then(() => {
      user.handleLogin(false);
      user.handleSetUser({});
    }); 
  };

  return (
    <nav className="nav navbar navTitleBar navbar-expand-md fixed-top">
      <img id="brandIcon" className=" image-fluid" alt="Pickup" src={BrandIcon}/>
      <div className="navbar-brand appTitle ml-4">Donation Connection</div>
      <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </div>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ml-auto pl-0">
          <li className="nav-item active">
            <a className="nav-link navBtn" href="/">Home</a>
          </li>
          {!user.loggedIn && (
          <li className="nav-item">
            <a className="nav-link navBtn" href="/">Login</a>
          </li>
          )}
          {user.loggedIn && (
          <li className="nav-item">
            <a className="nav-link navBtn" onClick={logout} href="/">Logout</a>
          </li>
          )}
          <li className="nav-item">
            <a className="nav-link navBtn" href="/account">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
