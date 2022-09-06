import React from 'react';
import Adivisa from './Adivisa';

function Buttonlogin() {
  return (
    <div className='login-container'>
      <Adivisa />
      <button type='button' name='login' className='btn-login'>
        Iniciar Sesión
      </button>
    </div>
  );
}
export default Buttonlogin;
