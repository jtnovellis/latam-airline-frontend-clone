import React from 'react';
import '../scss/pages/Flights.scss';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import Boxsearch from 'components/Booking/Boxsearch';
import BookingInputs from 'components/Booking/BookingInputs';
import BookingInputsDesktop from 'components/Booking/BookingInputsDesktop';
import FlightContainer from '../components/BookingFlightSelector/FlightContainer';
import StatusFlight from 'components/StatusFlight/StatusFlight';

const Flights = () => {
  return (
    <>
      <HeaderRegister />
      <div className='container-flights'>
        <div>
          <Boxsearch />
          <BookingInputs />
          <BookingInputsDesktop />
        </div>
      </div>
      <div className='container-flights2'>
        <div className='cf'>
          <FlightContainer />
          <StatusFlight />
        </div>
      </div>
    </>
  );
};

export default Flights;
