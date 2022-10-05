import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import useRemoveCookies from '../../services/Cookies/useRemoveCookies';
import { useDispatch } from 'react-redux';
import { SET_USER_LOGIN } from 'store/reducers/userReducer';

const LoginDropDown = ({ drop, photo, username }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    useRemoveCookies('lausrin');
    dispatch({ type: SET_USER_LOGIN });
  };
  return (
    <div className={drop ? 'drop-enable' : 'loginDropDown'}>
      <div className='loginDropDown__content'>
        <div className='loginDropDown__content--header'>
          <div className='header--profile'>
            <img src={photo} alt='Username profile photo' />
          </div>
          <div className='header--username'>
            <p className='username-drop'>{username}</p>
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
              <button onClick={handleClick}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className='faArrowRightFromBracket'
                />
                <p>Cerrar sesión</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginDropDown;
