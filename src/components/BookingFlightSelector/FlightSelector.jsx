import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FlightCard from './FlightCard';
import useMediaQuery from '@mui/material/useMediaQuery';
const FlightSelector = () => {
  const [show, setShow] = useState(false);
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
  const ourMediaQuery = useMediaQuery('(max-width:588px)');
  return (
    <div
      style={
        show
          ? ourMediaQuery
            ? { height: '100rem' }
            : { height: '46rem' }
          : null
      }
      className='Flight__selector-body'>
      <div
        className='Flight__selector-info'
        onClick={() => (!show ? setShow(true) : null)}>
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
        {!show ? (
          <div className='Flight__selector-price hidden'>
            <span className='Flight__selector-price-title'>Adulto desde</span>
            <span className='Flight__selector-price-amount'>
              COP {user.price}
            </span>
          </div>
        ) : (
          <button
            onClick={() => (show ? setShow(false) : null)}
            className='Flight__button-close'>
            Cerrar X
          </button>
        )}
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
      {show ? (
        <div className='Flight__type-cards'>
          <div className='Flight__type-cards-container'>
            <FlightCard type='Basic' />
            <FlightCard type='Light' />
            <FlightCard type='Plus' />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FlightSelector;
