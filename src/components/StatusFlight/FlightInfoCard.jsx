import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function FlightInfoCard({
  departure,
  arrival,
  departureTime,
  arrivalTime,
  duration,
  setFlightTrip,
  cardDate,
}) {
  const [dateToRender, setDateToRender] = useState('');
  useEffect(() => {
    setDateToRender(cardDate);
  }, []);
  const dispatch = useDispatch();
  function handleClick() {
    setFlightTrip('go');
    dispatch({ type: '@booking/removeFlights' });
  }
  return (
    <>
      <p className='date'>Vuelo {dateToRender}</p>
      <div className='flight1'>
        <div className='flight1_city'>
          <p>{departureTime}</p>
          <span>{departure}</span>
        </div>
        <div className='flight1_duration'>
          <p>Directo</p>
          <span>{duration}</span>
        </div>
        <div className='flight1_city'>
          <p>{arrivalTime}</p>
          <span>{arrival}</span>
        </div>
        <button className='changeflight' onClick={handleClick}>
          cambiar
        </button>
      </div>
    </>
  );
}

export default FlightInfoCard;
