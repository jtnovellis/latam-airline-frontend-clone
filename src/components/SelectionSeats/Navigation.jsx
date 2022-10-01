import React from 'react';
import CityNav from './CityNav';

const Navigation = ({ param }) => {
  return (
    <div className='navigation'>
      <div className='navigation__selectorbyCity'>
        <CityNav param={param} />
      </div>
    </div>
  );
};

export default Navigation;
