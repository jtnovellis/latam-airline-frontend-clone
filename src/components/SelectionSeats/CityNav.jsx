import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CityNav = ({ param }) => {
  const [selected, setSelected] = useState({
    go: true,
    return: false,
  });
  const { departureCity, arrivalCity, roundTrip } = useSelector(
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
          {departureCity.split(',')[0]} a {arrivalCity.split(',')[0]}
        </span>
        <span className='cityNav__direction'>Vuelo de ida</span>
      </button>
      {!roundTrip ? null : (
        <button
          className={selected.return ? 'cityNav selected-city' : 'cityNav'}>
          <span className='cityNav__cities'>
            {arrivalCity.split(',')[0]} a {departureCity.split(',')[0]}
          </span>
          <span className='cityNav__direction'>Vuelo de vuelta</span>
        </button>
      )}
    </>
  );
};

export default CityNav;
