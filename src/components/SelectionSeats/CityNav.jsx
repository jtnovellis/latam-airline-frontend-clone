import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CityNav = ({ param }) => {
  const [selected, setSelected] = useState({
    go: true,
    return: false,
  });
  const { origin, destination, roundTrip } = useSelector(
    state => state.bookingReducer
  );

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
      <button className={selected.go ? 'cityNav selected-city' : 'cityNav'}>
        <span className='cityNav__cities'>
          {origin} a {destination}
        </span>
        <span className='cityNav__direction'>Vuelo de ida</span>
      </button>
      {!roundTrip ? null : (
        <button
          className={selected.return ? 'cityNav selected-city' : 'cityNav'}>
          <span className='cityNav__cities'>
            {destination} a {origin}
          </span>
          <span className='cityNav__direction'>Vuelo de vuelta</span>
        </button>
      )}
    </>
  );
};

export default CityNav;
