import React from 'react';
import Navbar from './Navbar';
import logo from '../../images/homepage/latam-airlines-home-logo.png';
import Buttonlogin from './Buttonlogin';
import Burgericon from './Burgericon';
import ButtonLoginUser from './ButtonLoginUser';
import useGetCookies from 'services/Cookies/useGetCookies';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';

function Header() {
  const user = useGetCookies('lausrin');
  const { isExpired } = useJwt(user);
  const auth = isExpired;

  return (
    <>
      <header className='container__header-homepage'>
        <div className='container__header'>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo de la aerolinea LATAM'
              className='img-logo'
            />
          </Link>
          <Navbar />
          {!auth ? <ButtonLoginUser /> : <Buttonlogin />}
          <Burgericon />
        </div>
      </header>
    </>
  );
}

export default Header;
