import React from 'react';
import Navbar from './Navbar';
import logo from '../../images/homepage/latam-airlines-home-logo.png';
import Buttonlogin from './Buttonlogin';
import Burgericon from './Burgericon';
import ButtonLoginUser from './ButtonLoginUser';
// import { useSelector } from 'react-redux';
import useGetCookies from 'services/Cookies/useGetCookies';
import { useJwt } from 'react-jwt';

function Header() {
  // const isLogin = useSelector(state => state.userReducer.isLogin);
  const user = useGetCookies('lausrin');
  const { isExpired } = useJwt(user);
  const auth = isExpired;

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
          {!auth ? <ButtonLoginUser /> : <Buttonlogin />}
          <Burgericon />
        </div>
      </header>
    </>
  );
}

export default Header;
