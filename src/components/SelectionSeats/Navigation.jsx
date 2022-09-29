import React from 'react';
import CityNav from './CityNav';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__selectorbyCity'>
        <CityNav />
      </div>
    </div>
  );
};

export default Navigation;
