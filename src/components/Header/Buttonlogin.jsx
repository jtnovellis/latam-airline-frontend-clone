import React from 'react';
import { Link } from 'react-router-dom';

function Buttonlogin() {
  return (
    <div className='login-container'>
      <Link to='/login'>
        <button type='button' name='login' className='btn-login'>
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
}
export default Buttonlogin;
