import React from 'react';
import { useDispatch } from 'react-redux';

function FlightInfoCard({
  departure,
  arrival,
  departureTime,
  arrivalTime,
  duration,
}) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({ type: '@booking/removeFlights' });
  }
  return (
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
  );
}

export default FlightInfoCard;
