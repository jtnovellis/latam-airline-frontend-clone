import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = props => {
  const { path, children, current, setCurrent } = props;

  function handleClick(e) {
    const value = e.target.value;
    if (value === '/admin-fligths') {
      setCurrent({
        '/admin-fligths': true,
        'travel-data': false,
      });
    }
    if (value === 'travel-data') {
      setCurrent({
        '/admin-fligths': false,
        'travel-data': true,
      });
    }
  }

  return (
    <>
      <div className={`menuSelector ${current[path] ? 'selected' : null}`}>
        <Link to={path} className='menuSelector__links'>
          <button
            className='menuSelector__links--buttons'
            value={path}
            onClick={e => handleClick(e)}>
            {children}
          </button>
        </Link>
      </div>
    </>
  );
};

export default AdminMenu;
