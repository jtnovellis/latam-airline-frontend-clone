import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FlightCard from './FlightCard';
import useMediaQuery from '@mui/material/useMediaQuery';

const FlightSelector = prop => {
  const {
    departure,
    arrival,
    departureTime,
    arrivalTime,
    duration,
    price,
    flightsAllData,
    setFlightTrip,
  } = prop;
  const flightData = {
    departure,
    arrival,
    departureTime,
    arrivalTime,
    duration,
    price,
  };
  const [show, setShow] = useState(false);

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
            {prop.departureTime}
          </span>
          <span className='Flight__selector-departure-location'>
            {prop.departure}
          </span>
        </div>
        <div className='Flight__selector-duration'>
          <span className='Flight__selector-duration-title'>Duración</span>
          <span className='Flight__selector-duration-time'>
            {prop.duration}
          </span>
        </div>
        <div className='Flight__selector-arrival'>
          <span className='Flight__selector-arrival-time'>
            {prop.arrivalTime}
          </span>
          <span className='Flight__selector-arrival-location'>
            {prop.arrival}
          </span>
        </div>
        {!show ? (
          <div className='Flight__selector-price hidden'>
            <span className='Flight__selector-price-title'>Adulto desde</span>
            <span className='Flight__selector-price-amount'>
              COP {prop.price.toLocaleString('en')}
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
            <FlightCard
              data={flightData}
              type='Basic'
              price={prop.price}
              trigger={prop.trigger}
            />
            <FlightCard
              data={flightData}
              type='Light'
              flightsAllData={flightsAllData}
              price={prop.price}
              trigger={prop.trigger}
              setFlightTrip={setFlightTrip}
            />
            <FlightCard
              data={flightData}
              type='Plus'
              price={prop.price}
              trigger={prop.trigger}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FlightSelector;
