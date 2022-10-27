import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FlightInfoCard from './FlightInfoCard';
import { parseDates } from 'utils/parseDates';
import axios from 'axios';
import { SET_INITIAL_BOOKING_DATA } from 'store/reducers/bookingReducer';

const FlightInfo = ({ setFlightTrip }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dates, flightData, departureCity, arrivalCity, roundTrip } =
    useSelector(state => state.bookingReducer);

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

  const handleClick = () => {
    axios
      // eslint-disable-next-line no-undef
      .post(`${process.env.REACT_APP_API_LATAM_CLONE}/api/bookings/test`, {
        roundtrip: roundTrip,
        arrival: arrivalCity,
        departure: departureCity,
      })
      .then(res => {
        const initialbooking = res.data.data;
        dispatch({ type: SET_INITIAL_BOOKING_DATA, payload: initialbooking });
      });
    navigate('/seats-selection?dir=departure');
  };
  return (
    <div className='statusf'>
      <h1>Resumen de tu viaje</h1>
      {flightData.length > 0 && flightSelected}
      {flightData.length === 2 && (
        <button className='continue' onClick={handleClick}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default FlightInfo;
