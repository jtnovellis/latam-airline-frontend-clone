import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FlightInfoCard from './FlightInfoCard';

const FlightInfo = () => {
  const flightData = useSelector(state => state.bookingReducer.flightData);

  const datesFlights = useSelector(state => state.bookingReducer.dates);
  const date = datesFlights[0];

  const flightSelected = flightData.map((flight, i) => (
    <FlightInfoCard
      departure={flight.departure}
      arrival={flight.arrival}
      departureTime={flight.departureTime}
      arrivalTime={flight.arrivalTime}
      duration={flight.duration}
      key={`${flight.departure}${flight.arrival}${i}`}
    />
  ));
  return (
    <div>
      <div className='statusf'>
        <h1>Resumen de tu viaje</h1>
        <p className='date'>
          Vuelo ida: {JSON.stringify(date).slice(1, 5)} -
          {JSON.stringify(date).slice(6, 8)} -
          {JSON.stringify(date).slice(9, 11)}
        </p>
        {flightData.length > 0 && flightSelected}
        <Link to='/seats-selection?dir=departure'>
          <button className='continue'>continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default FlightInfo;
