import React from 'react';
import { useSelector } from 'react-redux';

const FlightInfo = () => {
  const datesFlights = useSelector(state => state.bookingReducer.dates);
  const date = datesFlights[0];
  const flight = useSelector(state => state);
  console.log(flight);
  return (
    <div>
      <div className='statusf'>
        <h1>Resumen de tu viaje</h1>
        <p>
          Vuelo ida: {JSON.stringify(date).slice(1, 5)} -
          {JSON.stringify(date).slice(6, 8)} -
          {JSON.stringify(date).slice(9, 11)}
        </p>
        <div className='flight1'>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
