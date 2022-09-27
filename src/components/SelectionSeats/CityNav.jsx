import React from 'react';

const CityNav = ({ origin, destination, direction }) => {
  return (
    <button className='cityNav'>
      <span className='cityNav__cities'>
        {origin} a {destination}
      </span>
      <span className='cityNav__direction'>{direction}</span>
    </button>
  );
};

export default CityNav;
