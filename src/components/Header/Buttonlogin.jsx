import React from 'react';
import { Link } from 'react-router-dom';
import Adivisa from './Adivisa';

function Buttonlogin() {
  return (
    <div className='login-container'>
      <Adivisa />
      <Link to='login'>
        <button type='button' name='login' className='btn-login'>
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
}
export default Buttonlogin;
