import React from 'react';
import { Link } from 'react-router-dom';
import Adivisa from './Adivisa';
import LoginDropDown from 'components/LoginDropDown';
import { useDispatch } from 'react-redux';
import { DROP_MENU_VALIDATOR } from 'store/reducers/userReducer';

function Buttonlogin() {
  return (
    <div className='login-container'>
      <Adivisa />
      <Link to='login'>
        <button
          type='button'
          name='login'
          className='btn-login'
          onClick={() => useDispatch({ type: DROP_MENU_VALIDATOR })}>
          Iniciar Sesión
        </button>
      </Link>
      <LoginDropDown />
    </div>
  );
}
export default Buttonlogin;
