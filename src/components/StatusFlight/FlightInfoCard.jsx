import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { DECREASE_PRICE } from 'store/reducers/bookingReducer';

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
  const { flightToGo, flightToReturn } = useSelector(
    state => state.flightsReducer
  );

  const { price: priceGoflight } = flightToGo;
  const { price: priceReturnflight } = flightToReturn;

  function handleClick() {
    setFlightTrip('go');
    dispatch({ type: '@booking/removeFlights' });
    dispatch({
      type: DECREASE_PRICE,
      payload: priceGoflight + priceReturnflight,
    });
  }
  return (
    <div className='containerFlight1'>
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
          Cambiar
        </button>
      </div>
    </div>
  );
}

export default FlightInfoCard;
