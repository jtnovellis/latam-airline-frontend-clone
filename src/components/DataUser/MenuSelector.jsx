import React from 'react';
import { Link } from 'react-router-dom';

const MenuSelector = props => {
  const { path, children, current, setCurrent } = props;

  function handleClick(e) {
    const value = e.target.value;
    if (value === '/my-account') {
      setCurrent({
        '/my-account': !current[value],
        'my-trips': false,
        'pay-methods': false,
      });
    }
    if (value === 'my-trips') {
      setCurrent({
        '/my-account': false,
        'my-trips': !current[value],
        'pay-methods': false,
      });
    }
    if (value === 'pay-methods') {
      setCurrent({
        '/my-account': false,
        'my-trips': false,
        'pay-methods': !current[value],
      });
    }
  }

  return (
    <div className={`menuSelector ${current[path] ? 'selected' : null}`}>
      <Link to={path} className='menuSelector__links'>
        <button
          className='menuSelector__links--buttons'
          value={path}
          onClick={e => handleClick(e)}>
          <span>{children}</span>
        </button>
      </Link>
    </div>
  );
};

export default MenuSelector;
