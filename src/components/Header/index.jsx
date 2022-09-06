import React from 'react';
import Navbar from './Navbar';
import logo from '../../images/homepage/latam-airlines-home-logo.png';
import Buttonlogin from './Buttonlogin';
import Burgericon from './Burgericon';

function Header() {
  return (
    <>
      <header className='container__header-homepage'>
        <div className='container__header'>
          <a href='/'>
            <img
              src={logo}
              alt='Logo de la aerolinea LATAM'
              className='img-logo'
            />
          </a>
          <Navbar />
          <Buttonlogin />
          <Burgericon />
        </div>
      </header>
    </>
  );
}

export default Header;
