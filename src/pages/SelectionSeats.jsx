import React from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Navigation from 'components/SelectionSeats/Navigation';
import Airplane from 'components/SelectionSeats/Airplane';
import Passengers from 'components/SelectionSeats/Passengers';
import Footer from '../components/Footer-Register';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const SelectionSeats = () => {
  const departure = useSelector(
    state => state.flightsReducer.departureFlightData
  );
  const arrival = useSelector(state => state.flightsReducer.arrivalFlightData);
  const passengerDeparture = useSelector(
    state => state.flightsReducer.departureUser
  );
  const passengerArrival = useSelector(
    state => state.flightsReducer.arrivalUser
  );
  const [totalseats, setTotalseats] = React.useState(0);
  const [query, setQuery] = useSearchParams();
  const param = query.get('dir');

  const handleAirplaneByFlight = () => {
    if (param === 'departure') {
      return (
        <Airplane
          flightData={departure}
          param={param}
          totalseats={totalseats}
          setTotalseats={setTotalseats}
        />
      );
    } else if (param === 'arrival') {
      return (
        <Airplane
          flightData={arrival}
          param={param}
          totalseats={totalseats}
          setTotalseats={setTotalseats}
        />
      );
    }
  };

  const handlePassengerByFlight = () => {
    if (param === 'departure') {
      return (
        <Passengers
          key={param}
          setQuery={setQuery}
          passengersToRender={passengerDeparture}
          totalseats={totalseats}
          param={param}
          setTotalseats={setTotalseats}
        />
      );
    } else if (param === 'arrival') {
      return (
        <Passengers
          key={param}
          setQuery={setQuery}
          passengersToRender={passengerArrival}
          totalseats={totalseats}
          param={param}
          setTotalseats={setTotalseats}
        />
      );
    }
  };

  return (
    <>
      <Header />
      <div className='navigation__title'>
        <h1>Elige tus asientos</h1>
      </div>
      <main className='selectionSeats'>
        <Navigation param={param} />
        <section className='selectionSeats__section'>
          {handleAirplaneByFlight()}
          {handlePassengerByFlight()}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SelectionSeats;
