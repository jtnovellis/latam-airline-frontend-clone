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
  const [query, setQuery] = useSearchParams();

  const handleAirplaneByFlight = () => {
    const param = query.get('dir');
    if (param === 'departure') {
      return <Airplane flightData={departure} />;
    } else if (param === 'arrival') {
      return <Airplane flightData={arrival} />;
    }
  };

  return (
    <>
      <Header />
      <div className='navigation__title'>
        <h1>Elige tus asientos</h1>
      </div>
      <main className='selectionSeats'>
        <Navigation />
        <section className='selectionSeats__section'>
          {handleAirplaneByFlight()}
          <Passengers setQuery={setQuery} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SelectionSeats;
