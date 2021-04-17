import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/Navbar.css';

function DetailsNavbar() {
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
              <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                Back
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default DetailsNavbar;
