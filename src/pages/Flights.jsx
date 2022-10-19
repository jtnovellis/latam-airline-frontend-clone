import React from 'react';
import '../scss/pages/Flights.scss';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import Boxsearch from 'components/Booking/Boxsearch';
import BookingInputs from 'components/Booking/BookingInputs';
import BookingInputsDesktop from 'components/Booking/BookingInputsDesktop';
import FlightContainer from '../components/BookingFlightSelector/FlightContainer';
import StatusFlight from 'components/StatusFlight/StatusFlight';
import FlightInfo from 'components/StatusFlight/FlightInfo';
import { useState } from 'react';
const Flights = () => {
  const [show, setShow] = useState(false);
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
          <FlightContainer trigger={setShow} />
          <div className='Status'>
            {show ? <FlightInfo /> : <StatusFlight />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
