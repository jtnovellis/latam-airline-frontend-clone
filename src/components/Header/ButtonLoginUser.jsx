import React from 'react';
import LoginDropDown from 'components/LoginDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { DROP_MENU_VALIDATOR } from 'store/reducers/userReducer';
import profilephoto from '../../images/user/avatar.png';

function ButtonLoginUser() {
  const { dropdown, name, lastname } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const userName = `${name} ${lastname}`;

  const handleClick = () => {
    dispatch({ type: DROP_MENU_VALIDATOR });
  };
  return (
    <div className='login-container__user'>
      <button
        type='button'
        name='login'
        className='btn-login__user'
        onClick={handleClick}>
        <img src={profilephoto} alt={userName} />
        <span>{userName}</span>
      </button>
      <LoginDropDown username={userName} photo={profilephoto} drop={dropdown} />
    </div>
  );
}
export default ButtonLoginUser;
