import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import profileIMG from '../../images/login/profileIMG.jpg';
import { useSelector } from 'react-redux';

const LoginDropDown = () => {
  const drop = useSelector(state => state.loginReducer.dropdown);
  return (
    <div className={drop ? 'drop-enable' : 'loginDropDown'}>
      <div className='loginDropDown__content'>
        <div className='loginDropDown__content--header'>
          <div className='header--profile'>
            <img src={profileIMG} alt='Username profile photo' />
          </div>
          <div className='header--username'>
            <p className='username-drop'>UserName</p>
            <p className='latam'>LATAM</p>
          </div>
        </div>
        <div className='loginDropDown__content--links'>
          <ul>
            <li>
              <Link to='/my-account'>
                <FontAwesomeIcon icon={faUser} className='faUser' />
                <p>Mi cuenta</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className='faArrowRightFromBracket'
                />
                <p>Cerrar sesión</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginDropDown;
