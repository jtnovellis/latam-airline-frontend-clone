import React from 'react';
import { Link } from 'react-router-dom';
const FlightSelector = () => {
  const user = {
    departureAirport: 'El Dorado Intl.',
    departureTime: '6:13',
    departure: 'BOG',
    arrivalAirport: 'Jose maría cordoba',
    arrivalTime: '7:12',
    arrival: 'MDE',
    duration: '0 h 59 min',
    price: '212.080',
  };

  return (
    <div className='Flight__selector-body'>
      <div className='Flight__selector-info'>
        <div className='Flight__selector-departure'>
          <span className='Flight__selector-departure-time'>
            {user.departureTime}
          </span>
          <span className='Flight__selector-departure-location'>
            {user.departure}
          </span>
        </div>
        <div className='Flight__selector-duration'>
          <span className='Flight__selector-duration-title'>Duración</span>
          <span className='Flight__selector-duration-time'>
            {user.duration}
          </span>
        </div>
        <div className='Flight__selector-arrival'>
          <span className='Flight__selector-arrival-time'>
            {user.arrivalTime}
          </span>
          <span className='Flight__selector-arrival-location'>
            {user.arrival}
          </span>
        </div>
        <div className='Flight__selector-price hidden'>
          <span className='Flight__selector-price-title'>Adulto desde</span>
          <span className='Flight__selector-price-amount'>
            COP {user.price}
          </span>
        </div>
      </div>
      <hr />
      <div className='Flight__selector-type'>
        <Link to={'/login'}>
          <span className='Flight__selector-type-flight'>Directo</span>
        </Link>

        <div className='Flight__selector-price toShow'>
          <span className='Flight__selector-price-title '>Adulto desde</span>
          <span className='Flight__selector-price-amount'>COP 212.080,00</span>
        </div>
      </div>
    </div>
  );
};

export default FlightSelector;
