import React, { useEffect, useState } from 'react';

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

const CityNav = ({ param }) => {
  const [selected, setSelected] = useState({
    go: true,
    return: false,
  });
  useEffect(() => {
    if (param === 'departure') {
      setSelected({
        go: true,
        return: false,
      });
    }
    if (param === 'arrival') {
      setSelected({
        go: false,
        return: true,
      });
    }
  }, [param]);
  return (
    <>
      <button className={selected.go ? 'cityNav selected' : 'cityNav'}>
        <span className='cityNav__cities'>
          {flightGo.origin} a {flightGo.destination}
        </span>
        <span className='cityNav__direction'>{flightGo.direction}</span>
      </button>
      <button className={selected.return ? 'cityNav selected' : 'cityNav'}>
        <span className='cityNav__cities'>
          {flightRtn.origin} a {flightRtn.destination}
        </span>
        <span className='cityNav__direction'>{flightRtn.direction}</span>
      </button>
    </>
  );
};

export default CityNav;
