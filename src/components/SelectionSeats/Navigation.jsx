import React from 'react';
import CityNav from './CityNav';

const citynavData = [
  { origin: 'Barranquilla', destination: 'Bogota', direction: 'Vuelo de ida' },
  {
    origin: 'Bogota',
    destination: 'Barranquilla',
    direction: 'Vuelo de vuelta',
  },
];

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigation__title'>
        <h1>Elige tus asientos</h1>
      </div>
      <div className='navigation__selectorbyCity'>
        {citynavData.map(({ origin, destination, direction }) => (
          <CityNav
            key={origin}
            origin={origin}
            destination={destination}
            direction={direction}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
