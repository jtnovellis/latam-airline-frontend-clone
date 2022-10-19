import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FlightInfo = () => {
  const flightGodata = useSelector(state => state.bookingReducer.flightGoData);
  console.log(flightGodata);
  const datesFlights = useSelector(state => state.bookingReducer.dates);
  const date = datesFlights[0];

  return (
    <div>
      <div className='statusf'>
        <h1>Resumen de tu viaje</h1>
        <p className='date'>
          Vuelo ida: {JSON.stringify(date).slice(1, 5)} -
          {JSON.stringify(date).slice(6, 8)} -
          {JSON.stringify(date).slice(9, 11)}
        </p>
        <div className='flight1'>
          <p className='dataFlight'></p>
        </div>
        <Link to='/seats-selection?dir=departure'>
          <button>continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default FlightInfo;
