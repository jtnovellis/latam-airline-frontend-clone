import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FlightInfoCard from './FlightInfoCard';
import { parseDates } from 'utils/parseDates';

const FlightInfo = ({ setFlightTrip }) => {
  const { dates, flightData } = useSelector(state => state.bookingReducer);

  const newDate = parseDates(dates);

  const goBack = ['ida', 'vuelta'];
  function setCardDate() {
    if (flightData.length === 1) {
      return `${goBack[0]} ${newDate[0]}`;
    } else if (flightData.length === 2) {
      return `${goBack[1]} ${newDate[1]}`;
    }
  }
  const cardDate = setCardDate();
  const flightSelected = flightData.map((flight, i) => (
    <FlightInfoCard
      cardDate={cardDate}
      setFlightTrip={setFlightTrip}
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
        {flightData.length > 0 && flightSelected}
        {flightData.length === 2 && (
          <Link to='/seats-selection?dir=departure'>
            <button className='continue'>Continuar</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FlightInfo;
