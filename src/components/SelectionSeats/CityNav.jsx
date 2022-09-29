import React, { useState } from 'react';

const flightGo = {
  origin: 'Barranquilla',
  destination: 'Bogota',
  direction: 'Vuelo de ida',
};
const flightRtn = {
  origin: 'Bogota',
  destination: 'Barranquilla',
  direction: 'Vuelo de vuelta',
};

const CityNav = () => {
  const [selected, setSelected] = useState({
    go: true,
    return: false,
  });
  return (
    <>
      <button
        onClick={() => setSelected({ go: true, return: false })}
        className={selected.go ? 'cityNav selected' : 'cityNav'}>
        <span className='cityNav__cities'>
          {flightGo.origin} a {flightGo.destination}
        </span>
        <span className='cityNav__direction'>{flightGo.direction}</span>
      </button>
      <button
        onClick={() => setSelected({ go: false, return: true })}
        className={selected.return ? 'cityNav selected' : 'cityNav'}>
        <span className='cityNav__cities'>
          {flightRtn.origin} a {flightRtn.destination}
        </span>
        <span className='cityNav__direction'>{flightRtn.direction}</span>
      </button>
    </>
  );
};

export default CityNav;
