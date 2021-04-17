import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/Navbar.css';
import './../css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';

function HomeNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="../DreamFundX_logo.png" height="40" width="240" alt="text here" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/campaigns'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/getstarted'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Dropdown className='nav-links'>
                <Dropdown.Toggle id="dropdown-basic" >
                  Register
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Contributor Account</Dropdown.Item>
                  <Dropdown.Item href="#">Business Account</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
