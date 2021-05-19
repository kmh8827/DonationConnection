import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import '../assets/scss/nav.scss'
import BrandIcon from '../assets/images/icons/BrandIcon.png'
import AUTH from "../utils/AUTH";
import { CurrentUserContext } from "../context/currentUser";
import { Dropdown } from "react-bootstrap";

const Header = () => {

  const { handleSetUser } = useContext(CurrentUserContext);
  const history = useHistory();

  // Logs the user out of the application, redirects to Home Page
  const logout = (e) => {
    e.preventDefault();
    AUTH.logout().then(() => {
      handleSetUser({});
      history.push('/');
    });
  };

  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a id="dropdownToggle" href="" ref={ref} onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
      {children}
    &#x25BE;
    </a>
  ));

  return (
    <nav className="nav navbar navTitleBar navbar-expand-md fixed-top">
      <img id="brandIcon" className=" image-fluid" alt="Pickup" src={BrandIcon} />
      <div className="navbar-brand appTitle ml-4">Donation Connection</div>
      <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </div>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ml-auto pl-0">
          <li className="nav-item active">
            <p className="nav-link navBtn" onClick={() => history.push('/')}>Home</p>
          </li>

          <Dropdown className="dropdown">
            <Dropdown.Toggle as={CustomToggle} id="dropdownToggle">
              Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => history.push('/account')}>Account Information</Dropdown.Item>
              <Dropdown.Divider />
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </ul>
      </div>
    </nav>
  )
}

export default Header;
