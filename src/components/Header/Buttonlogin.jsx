import React from 'react';
import { Link } from 'react-router-dom';
import Adivisa from './Adivisa';
import LoginDropDown from 'components/LoginDropDown';

function Buttonlogin() {
  return (
    <div className='login-container'>
      <Adivisa />
      <Link to='login'>
        <button type='button' name='login' className='btn-login'>
          Iniciar Sesión
        </button>
      </Link>
      <LoginDropDown />
    </div>
  );
}
export default Buttonlogin;
