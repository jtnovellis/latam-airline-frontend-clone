import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import useRemoveCookies from '../../services/Cookies/useRemoveCookies';
import { useDispatch } from 'react-redux';
import {
  SET_USER_LOGIN,
  DROP_MENU_VALIDATOR,
} from 'store/reducers/userReducer';
// import logouser from '../../images/user/avatar.png';
import Avatar from '@mui/material/Avatar';

const LoginDropDown = ({ drop, photo, username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    useRemoveCookies('lausrin');
    dispatch({ type: SET_USER_LOGIN });
    window.location.reload();
  };

  const handleAccountClick = () => {
    navigate({ pathname: '/my-account' });
    dispatch({ type: DROP_MENU_VALIDATOR });
  };
  return (
    <div className={drop ? 'drop-enable' : 'loginDropDown'}>
      <div className='loginDropDown__content'>
        <div className='loginDropDown__content--header'>
          <div className='header--profile'>
            {/* <img src={photo || logouser} alt='Username profile photo' /> */}
            <Avatar alt={username} src={photo} sx={{ width: 35, height: 35 }} />
          </div>
          <div className='header--username'>
            <p className='username-drop'>{username}</p>
            <p className='latam'>LATAM</p>
          </div>
        </div>
        <div className='loginDropDown__content--links'>
          <ul>
            <li>
              <button onClick={handleAccountClick}>
                <FontAwesomeIcon icon={faUser} className='faUser' />
                <p>Mi cuenta</p>
              </button>
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
